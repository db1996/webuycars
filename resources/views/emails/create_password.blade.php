
@component('mail::message')
Hallo {{$gegevens->naam}},

De admin van WeBuyCars heeft voor jou een autodealer account aangemaakt.

Er moet alleen nog even een wachtwoord ingesteld worden en je kunt aan de slag!

@component('mail::button', ['url' => url('/create-password?token=' . $gegevens->confirmation_code)])
Maak je wachtwoord aan
@endcomponent

Werkt de knop niet? Kopieer de volgende link en plak deze in je browser:{{url('/create-password?token=' . $gegevens->confirmation_code)}}

<br>
Bedankt,<br>
{{ config('app.name') }}
@endcomponent
