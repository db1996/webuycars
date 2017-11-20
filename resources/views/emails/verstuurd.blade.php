
@component('mail::message')
Hallo!

Bedankt voor het invullen van het formulier, om het kenteken {{$kenteken->kenteken}} te valideren druk op de onderstaande knop

@component('mail::button', ['url' => url('/confirm/' . $kenteken->confirmation_code)])
Verifieer {{$kenteken->kenteken}}
@endcomponent

Bedankt,<br>
{{ config('app.name') }}
@endcomponent
