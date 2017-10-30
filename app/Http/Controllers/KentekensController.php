<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Session;
class KentekensController extends Controller
{
    public function index()
    {
        session()->forget('kmstand');
        session()->forget('uitvoering');
        session()->forget('carrosserie');
        session()->forget('versnelling');
        session()->forget('kleur');
        session()->forget('kenteken');
        return view('kentekens.index');
    }

    public function stap1(Request $request) {
        if (session('kenteken')){
            $kenteken = session('kenteken');
        }
        else{
            $kenteken = strtoupper($request->kenteken);
            session(['kenteken' => $request->kenteken]);
        }
        if (session('kmstand') && session('uitvoering') && session('carrosserie') && session('versnelling') && session('kleur')){
            $kmstand = session('kmstand');
            $uitvoeringtemp = session('uitvoering');
            $uitvoering = $uitvoeringtemp['naam'];
            $carrosserie = session('carrosserie');
            $versnelling = session('versnelling');
            $kleur = session('kleur');
            $date = session('date');
            $handelsbenaming = session('handelsbenaming');
            $brandstof_omschrijving = session('brandstof_omschrijving');
            $ses = 1;
            return view('kentekens.step1',
            compact('date', 'ses', 'uitvoering', 'carrosserie', 'versnelling', 'kleur', 'brandstof_omschrijving', 'handelsbenaming'));
        }
        else{

            $data = json_decode(file_get_contents('https://opendata.rdw.nl/resource/m9d7-ebf2.json?$limit=5000&$$app_token=R71sAZV5Xbq0c7WG1lD5Zmn0t&kenteken=' . $kenteken));
            if(!isset($data[0])){
                session()->flash("flashmessage", "Dat kenteken bestaat niet of het is onbekend bij ons");
                session()->flash("kindOfMes", "danger");
                return view('kentekens.index');
            }
            $data = $data[0];
            session(['date' => $data->datum_eerste_afgifte_nederland]);
            session(['handelsbenaming' => $data->handelsbenaming]);
            $brandstof_data =
            json_decode(file_get_contents('https://opendata.rdw.nl/resource/8ys7-d773.json?$limit=5000&$$app_token=R71sAZV5Xbq0c7WG1lD5Zmn0t&kenteken=' . $kenteken));
            $brandstof_data = $brandstof_data[0];
            session(['brandstof_omschrijving' => $brandstof_data->brandstof_omschrijving]);
            $carroseriedata = json_decode(file_get_contents('https://opendata.rdw.nl/resource/vezc-m2t6.json?$limit=5000&$$app_token=R71sAZV5Xbq0c7WG1lD5Zmn0t&kenteken=' . $kenteken));
            $carroseriedata = $carroseriedata[0];
            $versnellingsdata = [];
            if (isset($data->variant) && isset($data->uitvoering)) {
                $versnellingsdata = json_decode(file_get_contents('https://opendata.rdw.nl/resource/2ei8-phf6.json?$limit=5000&$$app_token=R71sAZV5Xbq0c7WG1lD5Zmn0t&eeg_variantcode=' . ($data->variant or '') . '&eeg_uitvoeringscode=' . ($data->uitvoering or '')));
                $versnellingsdata = $versnellingsdata[0];
            }
            $uitvoering = $data->uitvoering;
            $date = $data->datum_eerste_afgifte_nederland;
            $carrosserie = ['type' => $carroseriedata->carrosserietype, 'omschrijving' => $carroseriedata->type_carrosserie_europese_omschrijving];
            $versnelling =['type' => $versnellingsdata->type_versnellingsbak, 'aantal' => $versnellingsdata->aantal_versnellingen_bovengrens];
            $tweede_kleur = $data->tweede_kleur;
            if ($tweede_kleur == 'Niet geregistreerd'){
                $tweede_kleur = $data->eerste_kleur;
            }
            $kleur = ['first' => $data->eerste_kleur, 'current' => $tweede_kleur];
            $handelsbenaming = $data->handelsbenaming;
            $brandstof_omschrijving = $brandstof_data->brandstof_omschrijving ;
            return view('kentekens.step1',
            compact('date', 'uitvoering', 'carrosserie', 'versnelling', 'kleur', 'brandstof_omschrijving', 'handelsbenaming'));
        }


    }
    public function stap2(Request $request){
        session(['kmstand' => $request->kmstand]);
        session(['uitvoering' => $request->uitvoering]);
        session(['carrosserie' => $request->carrosserie]);
        session(['versnelling' => $request->versnelling]);
        session(['kleur' => $request->kleur]);
        return view('kentekens.step2');
    }
}
