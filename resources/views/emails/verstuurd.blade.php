
@component('mail::message')
Hallo!

Bedankt voor het invullen van het formulier, om het kenteken {{$kenteken->kenteken}} te valideren druk op de onderstaande knop

@component('mail::button', ['url' => url('/confirm/' . $kenteken->confirmation_code)])
Verifieer {{$kenteken->kenteken}}
@endcomponent

Hieronder staat alle informatie nog even op een rij

@component('mail::table')
|                           | Auto informatie                                                     |
| ------------------------- |:--------------------------------------------------------------------|
| De km stand:              | {{$kenteken->kmstand}}                                              |
| De uitvoering:            | {{$kenteken->uitvoering}}                                           |
| Carrosserie type:         | {{$kenteken->carrosserietype}}                                      |
| Carrosserie omschrijving: | {{$kenteken->carrosserieomschrijving}}                              |
| Type versnelling:         | {{($kenteken->versnellingtype == "A" ? "Automaat" : "Handmatig")}}  |
| Aantal versnellingen:     | {{$kenteken->versnellingaantal}}                                    |
| kleur:                    | {{$kenteken->kleurhuidige}}                                         |
|                   | **Jouw informatie**                      |
| Naam:             | {{$kenteken->kmstand}}                   |
| Email:            | {{$kenteken->uitvoering}}                |
| Telefoonnummer:   | {{$kenteken->carrosserietype}}           |
| Postcode:         | {{$kenteken->carrosserieomschrijving}}   |
|                   | **extra informatie**                     |
|                   | {{ ($kenteken->schadevrij == 0 ? "De auto is niet schadevrij" : "De auto is wel schadevrij") }}   |
|                   | {{ ($kenteken->rijdbaar == 0 ? "De auto is niet rijdbaar" : "De auto is wel rijdbaar") }}  |
|                | {{ ($kenteken->onderhoudsboekje == 0 ? "De auto heeft geen onderhoudsboekje" : "De auto heeft wel een onderhoudsboekje") }} |
| Buitenzijde:      | {{$kenteken->buitenzijde}}/5       |
| Interieur:        | {{$kenteken->interieur}}/5         |
| Technischestaat:  | {{$kenteken->technischestaat}}/5   |
| Bandenprofiel:    | {{$kenteken->bandenprofiel}}/5     |
@endcomponent

<br>
Bedankt,<br>
{{ config('app.name') }}
@endcomponent
