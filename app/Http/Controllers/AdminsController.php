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
        if (substr($request->id, 0, 1) == "e" ){
            $id = substr($request->id,2,strlen($request->id));
            $response['edited'] = $id;
            DB::table('users')->where('id', $id)->update(['name' => $request->naam, 'email' => $request->email]);
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
        return json_encode($response);
    }
}
