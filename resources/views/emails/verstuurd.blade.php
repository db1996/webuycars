
@component('mail::message')
Hallo!

Bedankt voor het invullen van het formulier, om het kenteken {{$kenteken->kenteken}} te valideren druk op de onderstaande knop

@component('mail::button', ['url' => url('/confirm/' . $kenteken->confirmation_code)])
Verifieer {{$kenteken->kenteken}}
@endcomponent

@component('mail::table')
| Laravel       | Table         | Example|
| ------------- |:-------------:| ------:|
| Col 2 is      | Centered      | $10    |
| Col 3 is      | Right-Aligned | $20    |
@endcomponent
{{$kenteken->kenteken}}<br>

Thanks,<br>
{{ config('app.name') }}
@endcomponent
