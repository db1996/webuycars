@extends('layouts.app')
@section('pagetype', 'jouwauto-page')
@section('content')
    @include('partials.steps')
    <div class="title-container">
        <h1>Je aanmelding is compleet</h1>
        <h2>Check je mail en bevestig je aanmelding</h2>
    </div>
    <div class="step4-container">
        <div class="info" style="height:500px;">
            <div class="container">
                <div class="row">
                    <div class="col-sm-1"></div>
                    <div class="col-sm-6">
                        <div class="row">
                            <h1>Gefeliciteerd! Je aanmelding is nu compleet</h1>
                            <p>
                                Je ontvangt nu een email ter bevestiging. Hierin wordt een link vermeld.
                                Door op de link te klikken activeer je de aanmelding.
                                Wil je de informatie nog aanvullen of foto's toevoegen? Dit kan via de mail.
                            </p>
                        </div>
                        <div class="row">
                            <?php createsteps(4, 3, 12, 3);?>
                        </div>
                    </div>
                    <div class="col-sm-1"></div>
                    <div class="col-sm-2">
                        <img src="{{asset('img/kentekens/kqKs2PMOcr0bW1fMrR14cFCyKRX8MU.png')}}" alt="">
                        {{-- <img src="{{asset('img/pose2.png')}}" alt=""> --}}
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
