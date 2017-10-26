@php
$year = date('Y', strtotime($data->datum_eerste_afgifte_nederland or '' ));
    function type_versnelling($str){
        if ($str == 'A') {
            return 'Automaat';
        }
        elseif ($str == 'H') {
            return 'Handmatig';
        }
        else{
            return 'Niet Bekend';
        }
    }
    $year = date('Y', strtotime($data->datum_eerste_afgifte_nederland or '' ));
    $type_versnelling = type_versnelling($versnellingsdata->type_versnellingsbak);
@endphp
@extends('layouts.app')
@section('pagetype', 'jouwauto-page')
@section('content')
    <div class="title-container">
        <h1>JOUW AUTO</h1>
        <h2>{{ $data->handelsbenaming  or '' }}, {{ $year  or '' }} {{ $brandstof_data->brandstof_omschrijving  or '' }}</h2>
    </div>
    <div class="grey-between"></div>
    <div class="info">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h2>Jouw auto info</h2>
                </div>
            </div>
            <div class="row">
                <div class="col col-sm-3"></div><div class="col col-sm-6">
                    <button type="button" class="btn btn-info" data-toggle="collapse" data-target="#kmstand">
                        <p>KM stand</p>
                        <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </button>
                    <div id="kmstand" class="collapse in collapse-div">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col col-sm-3"></div><div class="col col-sm-6">
                    <button type="button" class="btn btn-info" data-toggle="collapse" data-target="#uitvoering">
                        <p>Uitvoering</p>
                        <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </button>
                    <div id="uitvoering" class="collapse in collapse-div">
                        <input type="text" name="" value="{{ $data->uitvoering or '' }}">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col col-sm-3"></div>
                <div class="col col-sm-6">
                    <button type="button" class="btn btn-info" data-toggle="collapse" data-target="#carroserie">
                        <p>Carroserie</p>
                        <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </button>
                    <div id="carroserie" class="collapse in collapse-div">
                        <div class="row">
                            <div class="col col-sm-3">
                                <h4>Carrosserietype: </h2>
                            </div>
                            <div class="col col-sm-9">
                                <input type="text" name="" value="{{ $carroseriedata->carrosserietype  or '' }}">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col col-sm-3">
                                <h4>Omschrijving:</h2>
                            </div>
                            <div class="col col-sm-9">
                                <input type="text" name="" value="{{ $carroseriedata->type_carrosserie_europese_omschrijving  or '' }}">
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col col-sm-3"></div><div class="col col-sm-6">
                    <button type="button" class="btn btn-info" data-toggle="collapse" data-target="#versnelling">
                        <p>Versnelling</p>
                        <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </button>
                    <div id="versnelling" class="collapse in collapse-div">
                        <div class="row">
                            {{ $type_versnelling }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col col-sm-3"></div><div class="col col-sm-6">
                    <button type="button" class="btn btn-info" data-toggle="collapse" data-target="#kleur">
                        <p>Kleur</p>
                        <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </button>
                    <div id="kleur" class="collapse in collapse-div">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
