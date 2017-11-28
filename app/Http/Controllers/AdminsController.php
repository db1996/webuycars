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
                session()->flash("kindOfMesImp", "danger");
                return redirect()->route('home')->with('messageImp', 'Deze pagina is alleen beschikbaar voor admins');
            }
        }
        else{
            return redirect()->route('home');
        }
    }
}
