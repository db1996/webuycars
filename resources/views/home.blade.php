@extends('layouts.app')
@section('content')
    <div class="c-top-image">
        <div class="container c-top-image__container">
            <div class="row row--no-width">
                <div class="col col-sm-6 col-offset-sm-4">
                    <form class="c-form c-form--home" action="{{url('/kenteken/create')}}"  method="get">
                        <p>Voer hier je kenteken in:</p>
                        <input
                        oninvalid="this.setCustomValidity('Het kenteken moet 6 letters of cijfers hebben')" pattern=".{6,6}" required name="kenteken" class="c-form__plate" type="text">
                        <button class="c-btn c-btn--home" type="submit">Volgende</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="c-card">
        <h1 class="c-card__title">Verkoop <span class="m--bold">razend snel</span> uw auto</h1>
        <h2 class="c-card__subtitle">ontvang nu vrijblijvend een bod</h2>
    </div>
    <div class="c-card c-card--instructies">
        <div class="col col-sm-4">
            <img class="c-card__image" src="{{asset("img/stappenplan1.png")}}" alt="">
            <h2 class="c-card__subtitle c-card__subtitle--big">Meld je aan</h2>
            <p>Wacht niet langer en meld je vrijblijvend aan.</p>
            <p>Wij bieden altijd de juiste prijs.</p>
        </div>
        <div class="col col-sm-4">
            <img class="c-card__image" src="{{asset("img/stappenplan1.png")}}" alt="">
            <h2 class="c-card__subtitle c-card__subtitle--big">Prijs aanbieding</h2>
            <p>Wacht niet langer en meld je vrijblijvend aan.</p>
            <p>Wij bieden altijd de juiste prijs.</p>
        </div>
        <div class="col col-sm-4">
            <img class="c-card__image" src="{{asset("img/stappenplan1.png")}}" alt="">
            <h2 class="c-card__subtitle c-card__subtitle--big">Zorgeloos Verkocht</h2>
            <p>Wacht niet langer en meld je vrijblijvend aan.</p>
            <p>Wij bieden altijd de juiste prijs.</p>
        </div>
    </div>
    <div class="c-card c-card--gegevens">
        <div class="container">
            <div class="row h--align-vertical">
                <div class="col-md-6 c-card__imgcol c-card__imgcol--tabletdown c-card--center">
                    <img src="{{ asset('img/pose1.png') }}" alt="">
                </div>
                <div class="col-md-6 c-list">
                    <div class="c-list__item">
                        <div class="c-list__title">
                            <i class="fa fa-circle-thin c-list__icon" aria-hidden="true"></i>
                            <h2 class="c-list__title-text">Basis</h2>
                        </div>
                        <p>Vul het kenteken van je auto in en zoek naar jouw auto!</p>
                    </div>
                    <div class="c-list__item">
                        <div class="c-list__title">
                            <i class="fa fa-circle-thin c-list__icon" aria-hidden="true"></i>
                            <h2 class="c-list__title-text">Contactinformatie</h2>
                        </div>
                        <p>Vul jouw persoonlijke informatie in zodat wij contact met je op kunnen nemen.</p>
                    </div>
                    <div class="c-list__item">
                        <div class="c-list__title">
                            <i class="fa fa-circle-thin c-list__icon" aria-hidden="true"></i>
                            <h2 class="c-list__title-text">Aanvullende gegevens</h2>
                        </div>
                        <p>Vul wat extra gegevens in over je auto.</p>
                    </div>
                    <div class="c-list__item">
                        <div class="c-list__title">
                            <i class="fa fa-circle-thin c-list__icon" aria-hidden="true"></i>
                            <h2 class="c-list__title-text">Klaar = Kees</h2>
                        </div>
                        <p>Verstuur het formulier naar ons zodat wij zo snel mogelijk contact met je op kunnen nemen.</p>
                    </div>
                </div>
                <div class="col-md-6 c-card__imgcol c-card__imgcol--tabletup c-card--center">
                    <img src="{{ asset('img/pose1.png') }}" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="c-card c-card--review">
        <div class="container">
            <div class="row">
                <h1 class="c-card__subtitle">Onze tevreden klanten aan het woord</h1>
            </div>
            <div class="row">
                <div class="c-single-review col-sm-6">
                    <div class="c-single-review__foto"></div>
                    <div class="c-single-review__tussenlijn"></div>
                    <div class="c-card__subtitle c-card__subtitle--big c-card--black">
                        <h2>Twan van Asten</h2>
                    </div>
                    <p class="c-card--black c-card--margin-sides">Een collega van me had me verteld over ‘Webuycars’ en twee dagen later had ik mijn blauwe volkswagen polo verkocht.</p>
                    <div class="c-single-review__onderlijn"></div>
                    @include('partials.home-rating', ['num' => 4])
                </div>
                <div class="c-single-review col-sm-6">
                    <div class="c-single-review__foto c-single-review__foto--2"></div>
                    <div class="c-single-review__tussenlijn"></div>
                    <div class="c-card__subtitle c-card__subtitle--big c-card--black">
                        <h2>Cliff van soest</h2>
                    </div>
                    <p class="c-card--black c-card--margin-sides">Een collega van me had me verteld over ‘Webuycars’ en twee dagen later had ik mijn blauwe volkswagen polo verkocht.</p>
                    <div class="c-single-review__onderlijn"></div>
                    @include('partials.home-rating', ['num' => 3])
                </div>
            </div>
        </div>
    </div>
    <div class="footer">

    </div>
@endsection
