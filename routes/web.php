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
use App\Image;
// include(app_path().'/includes/ChromePhp.php');
Route::get('/', "KentekensController@index");
Route::get('/kenteken/create', 'KentekensController@create');
// Route::get('/kenteken/stap1', 'KentekensController@stap1');
Route::post('/kenteken/store', 'KentekensController@store');
Route::post('/upload', function()
{

    // ChromePhp::log('hello world');
    return Plupload::receive('file', function ($file)
    {
        $file->move(storage_path() . '/test/' . $_POST['kenteken'] . '/', $file->getClientOriginalName());
        $filename = $file->getClientOriginalName();
        $originalfilename = $file->getClientOriginalName();

        $image = Image::create([
            'kenteken_id' => NULL,
            'kenteken' => $_POST['kenteken'],
            'filename'  => $filename,
            'originalfilename'  => $originalfilename
        ]);
        $fuckyeah = [
            'id' => $image->id,
            'filename' =>$filename,
            'originalfilename' =>$originalfilename
        ];
        return json_encode($fuckyeah);
    });
});

Auth::routes();
Route::get('password/reset', [
  'as' => 'password.request',
  'uses' => 'Auth\ForgotPasswordController@showLinkRequestForm'
]);
Route::get('/home', 'HomeController@index')->name('home');

Route::get('confirm/{kenteken}', 'KentekensController@confirm');
http://localhost/webuycars/public/confirm/ad9ukD3rSet9rOrgTTOPVEDH1ojOm781
