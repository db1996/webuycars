<?php
use App\Image;
Auth::routes();
Route::get('/', "KentekensController@index");
Route::get('/kenteken/create', 'KentekensController@create');
Route::post('/kenteken/store', 'KentekensController@store');
Route::get('confirm/{kenteken}', 'KentekensController@confirm');
Route::get('password/reset', [
  'as' => 'password.request',
  'uses' => 'Auth\ForgotPasswordController@showLinkRequestForm'
]);
Route::post('image/{image_id}', 'ImagesController@delete');

Route::post('/upload', function()
{

    return Plupload::receive('file', function ($file)
    {
        $originalfilename = $file->getClientOriginalName();              // original filename, name which got uploaded
        $originalExtension = substr(strrchr($originalfilename, '.'), 1); // Gets the extension from the original name
        $filename = str_random(30) . "." . $originalExtension;           // Creates a random 30 character filename + extension
        // Moves the uploaded file into the server storage/image/{kenteken} folder
        $file->move(storage_path() . '/img/', $filename);
        //creates database record of the image, nullables the kenteken_id, will be filled when the form is submitted
        $image = Image::create([
            'kenteken_id' => NULL,
            'kenteken' => $_POST['kenteken'],
            'filename'  => $filename,
            'originalfilename'  => $originalfilename
        ]);
        // All info that is needed is put into an array and encoded as json
        $returnJson = json_encode([
            'id' => $image->id,
            'filename' =>$filename,
            'originalfilename' =>$originalfilename
        ]);
        return $returnJson;
    });
});
