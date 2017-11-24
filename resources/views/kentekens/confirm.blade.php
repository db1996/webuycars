@extends('layouts.app')
@section('pagetype', 'jouwauto-page')
@section('content')
    {{-- {{dd($kenteken)}} --}}
    <div class="c-card c-card--small">
        <h1 class="c-card__title c-card__title--small">{{$kenteken->kenteken}} is bevestigd</h1>
        <h2 class="c-card__subtitle c-card__subtitle--small">Hieronder staan nog een keer alle gegevens op een rij</h2>
    </div>
    <div id="swiped" class="c-info-tab c-info-tab--step4">
        <div class="container">
            <div class="row">
                <div class="col-md-4 --margin-top-col">
                    <div class="c-grid-content">
                        <h2 class="c-card__title  c-card__title--small c-grid-content--full-row">Auto informatie</h2>
                        <p class="c-grid-content--right">De kilometer stand: </p>
                        <p>{{$kenteken->kmstand}} KM</p>
                        <p class="c-grid-content--right">De uitvoering: </p>
                        <p>{{$kenteken->uitvoering}}</p>
                        <p class="c-grid-content--right">Carrosserie type: </p>
                        <p>{{$kenteken->carrosserietype}}</p>
                        <p class="c-grid-content--right">Carrosserie omschrijving: </p>
                        <p>{{$kenteken->carrosserieomschrijving}}</p>
                        <p class="c-grid-content--right">Type versnelling: </p>
                        <p>{{($kenteken->versnellingtype == "A" ? "Automaat" : "Handmatig")}}</p>
                        <p class="c-grid-content--right">Aantal versnellingen: </p>
                        <p>{{$kenteken->versnellingaantal}}</p>
                        <p class="c-grid-content--right">Kleur: </p>
                        <p>{{$kenteken->kleurhuidige}}</p>
                    </div>
                </div>
                <div class="col-md-4 --margin-top-col">
                    <div class="c-grid-content">
                        <h2 class="c-card__title  c-card__title--small c-grid-content--full-row">Jouw informatie</h2>
                        <p class="c-grid-content--right">Naam: </p>
                        <p>{{$kenteken->kmstand}} KM</p>
                        <p class="c-grid-content--right">Email: </p>
                        <p>{{$kenteken->uitvoering}}</p>
                        <p class="c-grid-content--right">telefoonnummer: </p>
                        <p>{{$kenteken->carrosserietype}}</p>
                        <p class="c-grid-content--right">postcode: </p>
                        <p>{{$kenteken->carrosserieomschrijving}}</p>
                    </div>
                </div>
                <div class="col-md-4 --margin-top-col">
                    <div class="c-grid-content">
                        <h2 class="c-card__title  c-card__title--small c-grid-content--full-row">Extra informatie</h2>
                        @if ($kenteken->schadevrij == 0)
                            <p class="c-grid-content--full-row c-card--center">De auto is <span class="m--bold">niet</span> schadevrij</p>
                        @else
                            <p class="c-grid-content--full-row c-card--center">De auto is <span class="m--bold">wel</span> schadevrij</p>
                        @endif
                        @if ($kenteken->rijdbaar == 0)
                            <p class="c-grid-content--full-row c-card--center">De auto is <span class="m--bold">niet</span> rijdbaar</p>
                        @else
                            <p class="c-grid-content--full-row c-card--center">De auto is <span class="m--bold">wel</span> rijdbaar</p>
                        @endif
                        @if ($kenteken->onderhoudsboekje == 0)
                            <p class="c-grid-content--full-row c-card--center">De auto heeft <span class="m--bold">geen</span> onderhoudsboekje</p>
                        @else
                            <p class="c-grid-content--full-row c-card--center">De auto heeft <span class="m--bold">wel</span> een onderhoudsboekje</p>
                        @endif
                        <h2 class="c-card__subtitle c-card__subtitle--xssmall c-grid-content--full-row">De staat van de auto</h2>
                            <p class="c-grid-content--right">Buitenzijde: </p>
                            <p>{{$kenteken->buitenzijde}}/5</p>
                            <p class="c-grid-content--right">Interieur: </p>
                            <p>{{$kenteken->interieur}}/5</p>
                            <p class="c-grid-content--right">Technischestaat: </p>
                            <p>{{$kenteken->technischestaat}}/5</p>
                            <p class="c-grid-content--right">Bandenprofiel: </p>
                            <p>{{$kenteken->bandenprofiel}}/5</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    @include('partials.steps', [
                        'numofsteps' => 4,
                        'active' => 4,
                        'width' => "12 col-md-6",
                        'offset' => "3 hidden-xs",
                    ])
                </div>
            </div>
            {{-- @endfor --}}
        </div>
    </div>
@endsection
