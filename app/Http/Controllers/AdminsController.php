<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Auth;
use DB;

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
}
