@extends('layouts.app')
@section('pagetype', 'jouwauto-page')
@section('content')
    <div class="title-container">
        <h1>Je aanmelding is compleet</h1>
        <h2>Check je mail en bevestig je aanmelding</h2>
    </div>
    <div class="step4-container">
        <div class="info info-step4">
            <div class="container">
                <div class="row">
                    <div class="col-sm-3 hidden-sm"></div><div class="col-sm-12 col-md-6">
                        <h1>Gefeliciteerd! Je aanmelding is nu compleet</h1>
                        <p>
                            Je ontvangt nu een email ter bevestiging. Hierin wordt een link vermeld.
                            Door op de link te klikken activeer je de aanmelding.
                            Wil je de informatie nog aanvullen of foto's toevoegen? Dit kan via de mail.
                        </p>
                    </div>
                </div>
                @include('partials.steps', [
                    'numofsteps' => 4,
                    'active' => 3,
                    'width' => "12 col-md-6",
                    'offset' => "3 hidden-xs"
                ])
            </div>
        </div>
    </div>
@endsection
