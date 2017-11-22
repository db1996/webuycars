@extends('layouts.app')
@section('content')
    <div class="c-top-image">
        <div class="container c-top-image__container">
            <img src="" alt="">
            <div class="row row--no-width">
                <div class="col col-sm-6 col-offset-sm-4">
                    <form class="c-form c-form--home" action="{{url('/kenteken/create')}}"  method="get">
                        <p>Voer hier je kenteken in:</p>
                        <input id="test50"
                        oninvalid="this.setCustomValidity('Het kenteken moet 6 letters of cijfers hebben')" pattern=".{6,6}" required id="blah" name="kenteken" class="c-form__plate" type="text">
                        <button class="c-btn c-btn--home" type="submit">Volgende</button>
                    </form>
                    {{-- <button class="nextbtn" onclick="combi($('#blah').val())">Volgende</button> --}}
                </div>
            </div>
        </div>
    </div>
    <div class="vrijblijvend">
        <h1>Verkoop <span class="m--bold">razend snel</span> uw auto</h1>
        <h2>ontvang nu vrijblijvend een bod</h2>
    </div>
    <div class="instructies">
        <div class="col col-sm-4">
            <img class="instructies-img" src="{{asset("img/stappenplan1.png")}}" alt="">
            <h2>Meld je aan</h2>
            <p>Wacht niet langer en meld je vrijblijvend aan.</p>
            <p>Wij bieden altijd de juiste prijs.</p>
        </div>
        <div class="col col-sm-4">
            <img class="instructies-img" src="{{asset("img/stappenplan1.png")}}" alt="">
            <h2>Prijs aanbieding</h2>
            <p>Wacht niet langer en meld je vrijblijvend aan.</p>
            <p>Wij bieden altijd de juiste prijs.</p>
        </div>
        <div class="col col-sm-4">
            <img class="instructies-img" src="{{asset("img/stappenplan1.png")}}" alt="">
            <h2>Zorgeloos Verkocht</h2>
            <p>Wacht niet langer en meld je vrijblijvend aan.</p>
            <p>Wij bieden altijd de juiste prijs.</p>
        </div>
    </div>
    <div class="gegevens">
        <div class="container">
            <div class="row">
                <div class="imgcol col col-sm-6 hidden-xs">
                    <img src="{{ asset('img/pose1.png') }}">
                </div>
                <div class="col-sm-6">
                    <div class="right">
                        <div class="col col-sm-12">
                            <h2><i class="fa fa-circle-thin" aria-hidden="true"></i>&nbsp;&nbsp;Basis</h2>
                            <p>Vul het kenteken van je auto in en zoek naar jouw auto!</p>
                        </div>
                        <div class="col col-sm-12">
                            <h2><i class="fa fa-circle-thin" aria-hidden="true"></i>&nbsp;&nbsp;Contactinformatie</h2>
                            <p>Vul jouw persoonlijke informatie in zodat wij contact met je op kunnen nemen.</p>
                        </div>
                        <div class="col col-sm-12">
                            <h2><i class="fa fa-circle-thin" aria-hidden="true"></i>&nbsp;&nbsp;Aanvullende gegevens</h2>
                            <p>Vul wat extra gegevens in over je auto.</p>
                        </div>
                        <div class="bottom-col col col-sm-12">
                            <h2><i class="fa fa-circle-thin" aria-hidden="true"></i>&nbsp;&nbsp;Klaar = Kees</h2>
                            <p>Verstuur het formulier naar ons zodat wij zo snel mogelijk contact met je op kunnen nemen.</p>
                        </div>
                    </div>
                </div>
                <div class="imgcol col col-sm-6 visible-xs">
                    <img src="{{ asset('img/pose1.png') }}">
                </div>
            </div>
        </div>
    </div>
    <div class="reviews">
            <div class="container">
                <div class="row title-row">
                    <div class="col col-sm-12">
                        <h1>Onze tevreden klanten aan het woord</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="reviewbox-column col col-sm-6">
                        <div class="reviewbox">
                            <div class="foto"></div>
                            <div class="fotoOnderlijn"></div>
                            <div class="tekst-naam">
                                <h2>Twan van Asten</h2>
                            </div>
                            <div class="tekst">
                                Een collega van me had me verteld over ‘Webuycars’ en twee dagen later had ik mijn blauwe volkswagen polo verkocht.
                            </div>
                            <div class="tekstOnderlijn"></div>
                            @include('partials.home-rating', ['num' => 4])
                        </div>
                    </div>
                    <div class="reviewbox-column col col-sm-6">
                        <div class="reviewbox">
                            <div class="foto2"></div>
                            <div class="fotoOnderlijn"></div>
                            <div class="tekst-naam">
                                <h2>Cliff van soest</h2>
                            </div>
                            <div class="tekst">
                                Een collega van me had me verteld over ‘Webuycars’ en twee dagen later had ik mijn blauwe volkswagen polo verkocht.
                            </div>
                            <div class="tekstOnderlijn"></div>
                            @include('partials.home-rating', ['num' => 3])
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">

        </div>
@endsection
