@extends('layouts.app')
@section('pagetype', 'static-nav')
@section('content')
    <div class="c-card c-card--small">
        <h1 class="c-card__title c-card__title--small">Maak een wachtwoord aan {{$request->token}}</h1>
    </div>
@endsection
