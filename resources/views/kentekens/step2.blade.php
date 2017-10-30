@extends('layouts.app')
@section('pagetype', 'jouwauto-page')
@section('content')
    <div class="title-container">
        <h1>Contact gegevens</h1>
        <h2>Vul hier je contact gegevens in.</h2>
    </div>
    <div class="grey-between"></div>
    <div class="info-step2">
        <form action="{{url('/kenteken/stap2')}}" method="post">
            {!! csrf_field() !!}
            <div class="container">
                <div class="row">
                    <div class="col col-sm-3"></div><div class="col col-sm-6">
                        <input type="text" name="voornaam" placeholder="Voornaam...">
                    </div>
                </div>
                <div class="row">
                    <div class="col col-sm-3"></div><div class="col col-sm-6">
                        <input type="text" name="achternaam" placeholder="achternaam...">
                    </div>
                </div>
                <div class="row">
                    <div class="col col-sm-3"></div><div class="col col-sm-6">
                        <input type="text" name="email" placeholder="E-Mail...">
                    </div>
                </div>
                <div class="row">
                    <div class="col col-sm-3"></div><div class="col col-sm-6">
                        <input type="text" name="telefoonnummer" placeholder="Telefoonnummer...">
                    </div>
                </div>
                <div class="row">
                    <div class="col col-sm-3"></div><div class="col col-sm-6">
                        <input type="text" name="postcode" placeholder="Postcode...">
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
            <div class="row numbers-and-dashes">
                <div class="col-sm-3"></div>
                <div class="col col-sm-6 tablenr ">
                    <div class="col tablenr col-sm-2">
                        <i class="fa fa-check" aria-hidden="true"></i>
                    </div>
                    <div class="col tabledash col-sm-2"></div>
                    <div class="col tablenr col-sm-2 active">
                        <p>2</p>
                    </div>
                    <div class="col tabledash col-sm-2"></div>
                    <div class="col tablenr col-sm-2">
                        <p>3</p>
                    </div>
                    <div class="col tabledash col-sm-2"></div>
                    <div class="col tablenr col-sm-2">
                        <p>4</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-3"></div>
                <div class="col col-sm-6 tablenr ">
                    <form action="{{ url('/kenteken/stap1') }}">
                        <button type="submit" class="btn btn-info vorige-stap" >
                            <p><i class="fa fa-chevron-left" aria-hidden="true"></i>&nbsp;Terug</p>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
