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
    $type_versnelling = '';
    if (isset($versnellingsdata->type_versnellingsbak))
    {
        $type_versnelling = type_versnelling($versnellingsdata->type_versnellingsbak);
    }
    $tweede_kleur = $data->tweede_kleur;
    if ($tweede_kleur == 'Niet geregistreerd'){
        $tweede_kleur = $data->eerste_kleur;
    }
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
                        <select class="form-control" id="sel1">
                            <option value="5000">Tot 5.000</option>
                            <option value="10000">Tot 10.000</option>
                            <option value="20000">Tot 20.000</option>
                            <option value="30000">Tot 30.000</option>
                            <option value="40000">Tot 40.000</option>
                            <option value="60000">Tot 60.000</option>
                            <option value="80000">Tot 80.000</option>
                            <option value="100000">Tot 100.000</option>
                            <option value="125000">Tot 125.000</option>
                            <option value="150000">Tot 150.000</option>
                            <option value="200000">Meer dan 150.000</option>
                        </select>
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
                <div class="col col-sm-3"></div><div class="col col-sm-6">
                    <button type="button" class="btn btn-info" data-toggle="collapse" data-target="#carroserie">
                        <p>Carroserie</p>
                        <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </button>
                    <div id="carroserie" class="collapse in collapse-div">
                        <div class="row">
                            <div class="col col-sm-4 nopad-col">
                                <h4>Carrosserietype: </h2>
                            </div>
                            <div class="col col-sm-8">
                                <input type="text" name="" value="{{ $carroseriedata->carrosserietype  or '' }}">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col col-sm-4 nopad-col">
                                <h4>Omschrijving:</h2>
                            </div>
                            <div class="col col-sm-8">
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
                            <div class="col col-sm-4 nopad-col">
                                <h4 data-toggle="tooltip" title="Meestal 'Automaat' of 'Handmatig'">type:</h2>
                            </div>
                            <div class="col col-sm-8">
                                <input type="text" name="" value="{{ $type_versnelling or ''}}">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col col-sm-4 nopad-col">
                                <h4>Aantal versnellingen:</h2>
                            </div>
                            <div class="col col-sm-8">
                                <input type="text" name="" value="{{ $versnellingsdata->aantal_versnellingen_bovengrens or ''}}">
                            </div>
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
                        <div class="row">
                            <div class="col col-sm-4 nopad-col">
                                <h4>Eerste kleur</h2>
                            </div>
                            <div class="col col-sm-8">
                                <input type="text" name="" value="{{ $data->eerste_kleur or ''}}">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col col-sm-4 nopad-col">
                                <h4>Huidige Kleur</h2>
                            </div>
                            <div class="col col-sm-8">
                                <input type="text" name="" value="{{ $tweede_kleur or ''}}">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col col-sm-3"></div><div class="col col-sm-6">
                    <button type="button" class="btn btn-info volgende-stap" >
                        <p>Kleur</p>
                    </button>
                </div>
            </div>
            @include('partials.steps')
        </div>
    </div>
@endsection
