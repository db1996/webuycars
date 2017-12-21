<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Auth;
use DB;
use Mail;
use App\User;
use App\Mail\create_password;
function redirectHome(){
    session()->flash("flashmessage", "Deze pagina is alleen beschikbaar voor admins");
    session()->flash("kindOfMes", "danger");
    return redirect('/');
}

class AdminsController extends Controller
{
    // Admin dashboard
    public function index(){
        if (Auth::check()) {
            $user = Auth::user();
            if ($user->role != 'admin'){
                return redirectHome();
            }
            else{
                $autodealers = DB::table('users')->where('role', 'autodealer')->get();
                $page_title = "";
                return view('admins.index', compact('page_title', 'user', 'autodealers'));
            }
        }
        else{
            return redirectHome();
        }
    }
    public function sendEmail(Request $request){
        $response = array(
            'id' => $request->id,
        );
        $user = User::find($request->id);
        Mail::to($user)->send(new create_password($user));
        return json_encode($response);
    }
    // ASYNC ajax call to save new car dealers
    public function ajaxsave(Request $request){
        // The response that will be given back to JS
        $response = array(
            'name' => $request->naam,
            'mail' => $request->email,
        );
        $temp = User::where('email', '=', $request->email)->get(); // Checks if the email already exists
        // If the request->id starts with an 'e' It means it's meant to be EDITED not CREATED
        if (substr($request->id, 0, 1) == "e" ){
            $id = substr($request->id,2,strlen($request->id)); // Cuts the 'e'
            $response['edited'] = $id; // Adds the id to the response
            $curuser = User::find($id); // Finds the user to be edited by ID
            // checks if the email has changed from what it was
            if ($curuser->email != $request->email){
                // If the email is not the same but the given email already exists with another user it returns an error
                if (count($temp) > 0) {
                    $response['err'] = "Dat email bestaat al!";
                }
                else{
                    DB::table('users')->where('id', $id)->update(['name' => $request->naam, 'email' => $request->email]);
                }
            }
            // If the email of the user did not change it still edits it's name
            else{
                DB::table('users')->where('id', $id)->update(['name' => $request->naam, 'email' => $request->email]);
            }
        }
        // If the user needs to be CREATED
        else{
            // If the email already exists with another user it returns an error
            if (count($temp) > 0) {
                $response['err'] = "Dat email bestaat al!";
            }
            else{
                $user = new User;
                $user->role = "autodealer";
                $user->name = $request->naam;
                $user->email = $request->email;
                $user->confirmation_code = str_random(40);
                $user->save();
                $response['id'] = $user->id;
            }
        }
        return json_encode($response);
    }

    public function deleteDealer(Request $request){
        $id = str_replace('e-', '', $request->id);
        $response = array(
            'id-trimmed' => $id,
        );
        $user = User::find($id);
        if ($user){
            $user->delete();
        }
        else{
            $response['err'] = $user;
        }

        return json_encode($response);
    }
}
