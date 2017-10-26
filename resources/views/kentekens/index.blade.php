@extends('layouts.app')

@section('content')
    <div class="top-image">
        <div class="container">
            <img src="" alt="">
            <div class="row">
                <div class="col col-sm-6 col-offset-sm-4">
                    <form class="" action="{{url('/kenteken')}}"  method="get">
                        <p>Voer hier je kenteken in:</p>
                        <input id="blah" name="kenteken" class="plate" type="text">
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
@endsection
