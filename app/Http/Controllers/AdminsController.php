<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

class AdminsController extends Controller
{
    public function index(){
        if (Auth::check()) {
            $user = Auth::user();
            if ($user->role != 'admin'){
                session()->flash("flashmessage", "Deze pagina is alleen beschikbaar voor admins");
                session()->flash("kindOfMes", "danger");
                return redirect('/');
            }
            else{
                return view('admins.index');
            }
        }
        else{
            session()->flash("flashmessage", "Deze pagina is alleen beschikbaar voor admins");
            session()->flash("kindOfMes", "danger");
            return redirect('/');
        }
    }
}
