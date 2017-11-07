<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Kenteken extends Model
{
    //
    protected $fillable = ['kenteken', 'kmstand', 'uitvoering', 'carrosserietype', 'carrosserieomschrijving', 'versnellingtype', 'versnellingaantal', 'kleureerste', 'kleurhuidige', 'voornaam', 'achternaam', 'email', 'telefoonnummer', 'postcode', 'schadevrij', 'rijdbaar', 'onderhoudsboekje', 'buitenzijde', 'interieur', 'technischestaat', 'bandenprofiel', 'confirmed', 'confirmation_code'];
    public function getRouteKeyName()
    {
        return 'confirmation_code';
    }
    public function images()
    {
        return $this->hasMany(Image::class);
    }
}
