@extends('layouts.app')
@section('content')
    
    <div class="top-image">
        <div class="container">
            <img src="" alt="">
            <div class="row">
                <div class="col col-sm-6 col-offset-sm-4">
                    <form class="" action="{{url('/kenteken/create')}}"  method="get">
                        <p>Voer hier je kenteken in:</p>
                        <input id="test50"
                        oninvalid="this.setCustomValidity('Het kenteken moet 6 letters of cijfers hebben')" pattern=".{6,6}" required id="blah" name="kenteken" class="plate" type="text">
                        <button class="nextbtn" type="submit">Volgende</button>
                    </form>
                    {{-- <button class="nextbtn" onclick="combi($('#blah').val())">Volgende</button> --}}
                </div>
            </div>
        </div>
    </div>
    <div class="vrijblijvend">
        <h1>Verkoop <span>razend snel</span> uw auto</h1>
        <h2>ontvang nu vrijblijvend een bod</h2>
    </div>
    <div class="instructies">
        <div class="col col-sm-4">
            <img src="{{asset("img/stappenplan1.png")}}" alt="">
            <h2>Meld je aan</h2>
            <p>Wacht niet langer en meld je vrijblijvend aan.</p>
            <p>Wij bieden altijd de juiste prijs.</p>
        </div>
        <div class="col col-sm-4">
            <img src="{{asset("img/stappenplan1.png")}}" alt="">
            <h2>Prijs aanbieding</h2>
            <p>Wacht niet langer en meld je vrijblijvend aan.</p>
            <p>Wij bieden altijd de juiste prijs.</p>
        </div>
        <div class="col col-sm-4">
            <img src="{{asset("img/stappenplan1.png")}}" alt="">
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
                            <p>Vul het kenteken van je auto in of selecteer handmatig merk, model en uitvoering.</p>
                        </div>
                        <div class="col col-sm-12">
                            <h2><i class="fa fa-circle-thin" aria-hidden="true"></i>&nbsp;&nbsp;Contactinformatie</h2>
                            <p>Vul het kenteken van je auto in of selecteer handmatig merk, model en uitvoering.</p>
                        </div>
                        <div class="col col-sm-12">
                            <h2><i class="fa fa-circle-thin" aria-hidden="true"></i>&nbsp;&nbsp;Aanvullende gegevens</h2>
                            <p>Vul het kenteken van je auto in of selecteer handmatig merk, model en uitvoering.</p>
                        </div>
                        <div class="bottom-col col col-sm-12">
                            <h2><i class="fa fa-circle-thin" aria-hidden="true"></i>&nbsp;&nbsp;Klaar = Kees</h2>
                            <p>Vul het kenteken van je auto in of selecteer handmatig merk, model en uitvoering.</p>
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
                <div class="col col-sm-12">
                    <h1>Onze tevreden klanten aan het woord</h1>
                </div>
                <div class="row">
                    <div class="col col-sm-6">
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
                            <div class="rating">

                            </div>
                        </div>
                    </div>
                    <div class="col col-sm-6">
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
                            <div class="rating2">

                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">

        </div>
@endsection
