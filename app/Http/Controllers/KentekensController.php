<?php

namespace App\Http\Controllers;
use Mail;
use DB;
use App\Mail\Verstuurd;
use App\Kenteken;
use Illuminate\Http\Request;
use App\Http\Requests\StoreKenteken;
use Session;
class KentekensController extends Controller
{
    public function index()
    {
        return view('kentekens.index');
    }
    public function confirm(Kenteken $kenteken)
    {
        $kenteken->confirmed = 1;
        $kenteken->save();
    }
    public function store(StoreKenteken $request)
    {
        $images_id = explode(',', $request->images);
        $confirmed = 0;
        $kenteken = Kenteken::create([
            'kenteken' => $request->kenteken,
            'kmstand'  => $request->kmstand,
            'uitvoering' => $request->uitvoering['naam'],
            'carrosserietype' => $request->carrosserie['type'],
            'carrosserieomschrijving' => $request->carrosserie['omschrijving'],
            'versnellingtype' => $request->versnelling['type'],
            'versnellingaantal' => $request->versnelling['aantal'],
            'kleureerste' => $request->kleur['first'],
            'kleurhuidige' => $request->kleur['current'],
            'voornaam' => $request->voornaam,
            'achternaam'  => $request->achternaam,
            'email' => $request->email,
            'telefoonnummer'  => $request->telefoonnummer,
            'postcode' => $request->postcode,
            'schadevrij' => $request->schadevrij,
            'rijdbaar'  => $request->rijdbaar,
            'onderhoudsboekje' => $request->onderhoudsboekje,
            'buitenzijde'  => $request->buitenzijde,
            'interieur'  => $request->interieur,
            'technischestaat'  => $request->technischestaat,
            'bandenprofiel'  => $request->bandenprofiel,
            'confirmation_code' => str_random(128),
            'confirmed' => $confirmed
        ]);


        Mail::to($kenteken)->send(new Verstuurd($kenteken));
        DB::table('images')
        ->wherein('id', $images_id)
        ->update(['kenteken_id' => $kenteken->id, 'updated_at' => date('Y-m-d G:i:s')]);
        dd($kenteken->images->all());
    }
    public function create(Request $request)
    {
        if (Kenteken::where('kenteken', "=", $request->kenteken)->exists()){
            session()->flash("flashmessage", "Dat kenteken staat al in onze database!");
            session()->flash("kindOfMes", "danger");
            return redirect('/');
        }
        $validatedData = $request->validate([
            'kenteken' => 'required|max:6|min:6',
        ]);
        $kenteken = strtoupper($request->kenteken);
        $data = json_decode(file_get_contents('https://opendata.rdw.nl/resource/m9d7-ebf2.json?$limit=5000&$$app_token=R71sAZV5Xbq0c7WG1lD5Zmn0t&kenteken=' . $kenteken));
        if(!isset($data[0])){
            session()->flash("flashmessage", "Dat kenteken bestaat niet of het is onbekend bij ons");
            session()->flash("kindOfMes", "danger");
            return view('kentekens.index');
        }
        $data = $data[0];
        $brandstof_data =
        json_decode(file_get_contents('https://opendata.rdw.nl/resource/8ys7-d773.json?$limit=5000&$$app_token=R71sAZV5Xbq0c7WG1lD5Zmn0t&kenteken=' . $kenteken));
        $brandstof_data = $brandstof_data[0];

        $carroseriedata = json_decode(file_get_contents('https://opendata.rdw.nl/resource/vezc-m2t6.json?$limit=5000&$$app_token=R71sAZV5Xbq0c7WG1lD5Zmn0t&kenteken=' . $kenteken));
        $carroseriedata = $carroseriedata[0];

        $versnellingsdata = [];
        if (isset($data->variant) && isset($data->uitvoering)) {
            $versnellingsdata = json_decode(file_get_contents('https://opendata.rdw.nl/resource/2ei8-phf6.json?$limit=5000&$$app_token=R71sAZV5Xbq0c7WG1lD5Zmn0t&eeg_variantcode=' . ($data->variant or '') . '&eeg_uitvoeringscode=' . ($data->uitvoering or '')));
            $versnellingsdata = $versnellingsdata[0];
        }
        $uitvoering = "";
        $date = "";
        $carrosserie = "";
        $versnelling = "";
        $brandstof_omschrijving = "";
        if (isset( $data->uitvoering)){
            $uitvoering = $data->uitvoering;
        }
        if (isset( $data->datum_eerste_afgifte_nederland)){
            $date = $data->datum_eerste_afgifte_nederland;
        }
        if (isset($carroseriedata->carrosserietype) && isset($carroseriedata->type_carrosserie_europese_omschrijving)){
            $carrosserie =
            [
                'type' => $carroseriedata->carrosserietype,
                'omschrijving' => $carroseriedata->type_carrosserie_europese_omschrijving
            ];
        }
        if (isset($versnellingsdata->type_versnellingsbak) && isset($versnellingsdata->aantal_versnellingen_bovengrens)){
            $versnelling = [
                'type' => $versnellingsdata->type_versnellingsbak,
                'aantal' => $versnellingsdata->aantal_versnellingen_bovengrens
            ];
        }
        if (isset($brandstof_data->brandstof_omschrijving)){
            $brandstof_omschrijving = $brandstof_data->brandstof_omschrijving ;
        }
        $tweede_kleur = $data->tweede_kleur;
        if ($tweede_kleur == 'Niet geregistreerd'){
            $tweede_kleur = $data->eerste_kleur;
        }
        $kleur =
        [
            'first' => $data->eerste_kleur,
            'current' => $tweede_kleur
        ];
        $handelsbenaming = $data->handelsbenaming;
        return view('kentekens.all_steps',
        compact('date', 'uitvoering', 'carrosserie', 'versnelling', 'kleur', 'brandstof_omschrijving', 'handelsbenaming', 'kenteken'));
    }
}
