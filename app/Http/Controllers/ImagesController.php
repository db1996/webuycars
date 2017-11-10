<?php

namespace App\Http\Controllers;

use App\Image;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use \File;
class ImagesController extends Controller
{
    public function delete(Request $request){
        $image = Image::find($request->id);
        $filename = $image->filename;
        $kenteken = $image->kenteken;
        File::delete( 'img/kentekens/' . $filename);
        Image::destroy($request->id);
        return 1;
    }
}
