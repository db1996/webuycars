@extends('layouts.app')
@section('pagetype', 'jouwauto-page')
@section('content')
    <div class="c-card c-card--small">
        <h1 class="c-card__title c-card__title--small">Je aanmelding is compleet</h1>
        <h2 class="c-card__subtitle c-card__subtitle--small">Check je mail en bevestig je aanmelding</h2>
    </div>
    <div class="c-info-tab c-info-tab--step4">
        <div class="container">
            <div class="row">
                <div class="col-sm-3 hidden-sm"></div><div class="col-sm-12 col-md-6">
                    <h1 class="c-info-tab__title">Gefeliciteerd! Je aanmelding is nu compleet</h1>
                    <p class="c-info-tab__paragraph">
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
@endsection
