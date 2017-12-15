<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Auth;
use DB;
use App\User;
function redirectHome(){
    session()->flash("flashmessage", "Deze pagina is alleen beschikbaar voor admins");
    session()->flash("kindOfMes", "danger");
    return redirect('/');
}

class AdminsController extends Controller
{
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
    public function ajaxsave(Request $request){
        $response = array(
            'name' => $request->naam,
            'mail' => $request->email,
        );
        $temp = User::where('email', '=', $request->email)->get();
        if (substr($request->id, 0, 1) == "e" ){
            $id = substr($request->id,2,strlen($request->id));
            $response['edited'] = $id;
            $curuser = User::find($id);
            if ($curuser->email != $request->email){
                if (count($temp) > 0) {
                    $response['err'] = "Dat email bestaat al!";
                }
                else{
                    DB::table('users')->where('id', $id)->update(['name' => $request->naam, 'email' => $request->email]);
                }
            }
            else{
                DB::table('users')->where('id', $id)->update(['name' => $request->naam, 'email' => $request->email]);
            }
        }
        else{
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
        $user->delete();
        return json_encode($response);
    }
}
