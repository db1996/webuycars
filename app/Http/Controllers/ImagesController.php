<?php

namespace App\Http\Controllers;

use App\Image;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class ImagesController extends Controller
{
    public function delete(Request $request){
        $image = Image::find($request->id);
        $filename = $image->filename;
        $kenteken = $image->kenteken;
        unlink(storage_path() . '/img/' . $filename);
        Image::destroy($request->id);
        echo 1;

    }
}
