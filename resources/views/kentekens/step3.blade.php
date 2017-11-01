@extends('layouts.app')
@section('pagetype', 'jouwauto-page')
@section('content')
    @include('partials.star_rating')
    @include('partials.radio_buttons')
    <div class="title-container">
        <h1>Contact gegevens</h1>
        <h2>Vul hier je contact gegevens in.</h2>
    </div>
    <div class="grey-between"></div>
    <div class="info-step3">
        <div class="container">
            <div class="row">
                <div class="col-sm-3"></div><div class="col-sm-6">
                    <form id="dropzone-step3" action="{{url('img')}}" class="dropzone">
                        <div class="dz-message" id="dz-ms" data-dz-message>
                            <span>Sleep bestanden of klik om te kiezen</span>
                            <span><i class="fa fa-plus" aria-hidden="true"></i>&nbsp;&nbsp;<i class="fa fa-camera" aria-hidden="true"></i></span>
                        </div>
                    </form>
                </div>
            </div>

            <form action="{{url('/kenteken/stap3')}}" method="post">
                {!! csrf_field() !!}
                <div class="row">
                    <div class="col col-sm-3"></div><div class="col col-sm-6">
                        <?php create_radio_button("schadevrij", "Is de auto schadevrij?")?>
                    </div>
                </div>
                <div class="row">
                    <div class="col col-sm-3"></div><div class="col col-sm-6">
                        <?php create_radio_button("rijdbaar", "Is je auto rijdbaar?")?>
                    </div>
                </div>
                <div class="row">
                    <div class=" col col-sm-3"></div><div class="col col-sm-6">
                        <?php create_radio_button("onderhoudsboekje", "Onderhoudsboekje aanwezig?")?>
                    </div>
                </div>
                <div class="row">
                    <div class="col col-sm-3"></div><div class="col col-sm-6">
                        <div class="normalinput starinput">
                            <p class="pseudo_label">Staat buitenzijde</p>
                            <?php create_star_rating("buitenzijde")?>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col col-sm-3"></div><div class="col col-sm-6">
                        <div class="normalinput starinput">
                            <p class="pseudo_label">Staat interieur</p>
                            <?php create_star_rating("interieur")?>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col col-sm-3"></div><div class="col col-sm-6">
                        <div class="normalinput starinput">
                            <p class="pseudo_label">Technische staat</p>
                            <?php create_star_rating("technischestaat")?>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col col-sm-3"></div><div class="col col-sm-6">
                        <div class="normalinput starinput">
                            <p class="pseudo_label">Staat bandenprofiel</p>
                            <?php create_star_rating("bandenprofiel")?>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col col-sm-3"></div><div class="col col-sm-6">
                        <span class="currency">€<input class="currencyinput" required type="number" name="price" value="" placeholder="Verwachte prijs in euro's....."></span>
                    </div>
                </div>
                <div class="row">
                    <div class="col col-sm-3"></div><div class="col col-sm-6">
                        <input class="puretextinput" required type="text" name="accesoires" value="" placeholder="opties en accesoires...">
                    </div>
                </div>
                <div class="row">
                    <div class="col col-sm-3"></div><div class="col col-sm-6">
                        <button type="submit" class="btn btn-info volgende-stap" >
                            <p>Volgende</p>
                        </button>
                    </div>
                </div>
            </form>
            @include('partials.steps')
            <?php createsteps(4, 2, 6, 3);?>
            <div class="row">
                <div class="col-sm-3"></div>
                <div class="col col-sm-6 tablenr ">
                    <form action="{{ url('/kenteken/stap2') }}" method="post">
                        <input type="hidden" name="kenteken" value="{{session('kenteken')}}">
                        {{ csrf_field() }}
                        <button type="submit" class="btn btn-info vorige-stap" >
                            <p><i class="fa fa-chevron-left" aria-hidden="true"></i>&nbsp;Terug</p>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
