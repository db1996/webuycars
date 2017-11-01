<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', "KentekensController@index");
Route::post('/kenteken/stap1', 'KentekensController@stap1');
Route::get('/kenteken/stap1', 'KentekensController@stap1');
Route::post('/upload', function()
{

    return Plupload::receive('file', function ($file)
    {
        $file->move(storage_path() . '/test/', $file->getClientOriginalName());

        return 'ready';
    });
});

Auth::routes();
Route::get('password/reset', [
  'as' => 'password.request',
  'uses' => 'Auth\ForgotPasswordController@showLinkRequestForm'
]);
Route::get('/home', 'HomeController@index')->name('home');
