<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class CheckAdmin
{
    /**
    * Handle an incoming request.
    *
    * @param  \Illuminate\Http\Request  $request
    * @param  \Closure  $next
    * @return mixed
    */
    public function handle($request, Closure $next)
    {
        // Checks if user is logged in and if the role is admin, if yes, redirect to admin panel
        if (Auth::check() && Auth::user()->hasRole('admin')){
            return redirect('/admin');
        }
        return $next($request);
    }
}
