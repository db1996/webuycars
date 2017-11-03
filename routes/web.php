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
Route::get('/kenteken/create', 'KentekensController@create');
// Route::get('/kenteken/stap1', 'KentekensController@stap1');
Route::post('/kenteken/store', 'KentekensController@store');

// Route::post('/upload', 'ImagesController@upload');
Route::post('/upload', function()
{
    include(app_path().'/includes/ChromePhp.php');
    return Plupload::receive('file', function ($file)
    {

        $file->move(storage_path() . '/test/' . $_POST['kenteken'] . '/', $file->getClientOriginalName());
        return 'ready';
    });
});

Auth::routes();
Route::get('password/reset', [
  'as' => 'password.request',
  'uses' => 'Auth\ForgotPasswordController@showLinkRequestForm'
]);
Route::get('/home', 'HomeController@index')->name('home');
