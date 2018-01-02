<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UsersController extends Controller
{
    public function createPass(Request $request){
        // dd($request->token);
        return view('users.create-password');
    }
}
