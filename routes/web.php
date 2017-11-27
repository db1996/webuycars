<?php
use App\Image;
Auth::routes();
Route::get('logout', '\App\Http\Controllers\Auth\LoginController@logout');
Route::get('/', "KentekensController@index");
Route::get('/kenteken/create', 'KentekensController@create');
Route::post('/kenteken/store', 'KentekensController@store');
Route::get('/kenteken/klaar', 'KentekensController@klaar');
Route::get('confirm/{kenteken}', 'KentekensController@confirm');
Route::get('password/reset', [
  'as' => 'password.request',
  'uses' => 'Auth\ForgotPasswordController@showLinkRequestForm'
]);
