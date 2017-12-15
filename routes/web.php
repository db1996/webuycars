<?php
use App\Image;
Auth::routes();
Route::get('/', "HomeController@index")->name('home');
Route::get('logout', '\App\Http\Controllers\Auth\LoginController@logout');
Route::get('/kenteken/create', 'KentekensController@create');
Route::post('/kenteken/store', 'KentekensController@store');
Route::get('/kenteken/klaar', 'KentekensController@klaar');
Route::get('confirm/{kenteken}', 'KentekensController@confirm');
Route::get('password/reset', [
  'as' => 'password.request',
  'uses' => 'Auth\ForgotPasswordController@showLinkRequestForm'
]);
Route::get('/admin', 'AdminsController@index');
Route::post('/admin/ajaxsave', 'AdminsController@ajaxsave');
Route::post('/admin/delete-dealer', 'AdminsController@deleteDealer');
