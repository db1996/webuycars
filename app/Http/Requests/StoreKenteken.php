<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreKenteken extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    // protected $redirectRoute = redirect('/kenteken/create')->withInput();
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'kmstand' => 'bail|required|numeric',
            'uitvoering.naam' => 'bail|required',
            'carrosserie.type' => 'bail|required',
            'carrosserie.omschrijving' => 'bail|required',
            'versnelling.type' => 'bail|required',
            'versnelling.aantal' => 'bail|required|numeric',
            'kleur.first' => 'bail|required',
            'kleur.current' => 'bail|required',
            'voornaam' => 'bail|required',
            'achternaam' => 'bail|required',
            'email' => 'bail|required|email',
            'telefoonnummer' => 'bail|required|numeric',
            'postcode' => 'bail|required',
            'schadevrij' => 'bail|required|boolean',
            'rijdbaar' => 'bail|required|boolean',
            'onderhoudsboekje' => 'bail|required|boolean',
        ];
    }
}
