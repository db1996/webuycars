<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class KentekensController extends Controller
{
    public function index()
    {
        return view('kentekens.index');
    }

    public function test(Request $request) {
        $kenteken = strtoupper($request->kenteken);
        $data = json_decode(file_get_contents('https://opendata.rdw.nl/resource/m9d7-ebf2.json?$limit=5000&$$app_token=R71sAZV5Xbq0c7WG1lD5Zmn0t&kenteken=' . $kenteken));
        $data = $data[0];

        $brandstof_data =
        json_decode(file_get_contents('https://opendata.rdw.nl/resource/8ys7-d773.json?$limit=5000&$$app_token=R71sAZV5Xbq0c7WG1lD5Zmn0t&kenteken=' . $kenteken));
        $brandstof_data = $brandstof_data[0];

        $carroseriedata = json_decode(file_get_contents('https://opendata.rdw.nl/resource/vezc-m2t6.json?$limit=5000&$$app_token=R71sAZV5Xbq0c7WG1lD5Zmn0t&kenteken=' . $kenteken));
        $carroseriedata = $carroseriedata[0];

        return view('kentekens.step1', compact('data', 'brandstof_data', 'carroseriedata'));
    }
}
