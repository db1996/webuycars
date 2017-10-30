@php
// dd(session()->all());
$year = substr($date, -4);
if (isset($ses)){
    $type_versnelling = '';
    if (isset($versnelling->type))
    {
        $type_versnelling = type_versnelling($versnelling->type);
    }
}
else{
    $type_versnelling = '';
    if (isset($versnelling->type))
    {
        $type_versnelling = type_versnelling($versnelling->type);
    }
}
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
@endphp
@extends('layouts.app')
@section('pagetype', 'jouwauto-page')
@section('content')
    <div class="title-container">
        <h1>JOUW AUTO</h1>
        <h2>{{ $handelsbenaming  or   '' }}, {{ $year  or '' }} {{ $brandstof_omschrijving  or '' }}</h2>
    </div>
    <div class="grey-between"></div>
    <div class="info">
        <form action="{{url('/kenteken/stap2')}}" method="post">
        {!! csrf_field() !!}
        <div class="container">
            <div class="row">
                <div class="col">
                    <h2>Info over jouw auto</h2>
                </div>
            </div>
            <div class="row">
                <div class="col col-sm-3"></div><div class="col col-sm-6">
                    <button type="button" class="btn btn-info" data-toggle="collapse" aria-expanded="true" data-target="#kmstand">
                        <p>KM stand</p>
                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                    </button>
                    <div id="kmstand" class="collapse in collapse-div">
                        <div class="inbetween-div">
                            <div class="select-side">
                                <i class="fa fa-chevron-down" aria-hidden="true"></i>
                            </div>
                            <select class="form-control" name="kmstand" id="sel1">
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
            </div>
            <div class="row">
                <div class="col col-sm-3"></div><div class="col col-sm-6">
                    <button type="button" class="btn btn-info" data-toggle="collapse" aria-expanded="true" data-target="#uitvoering">
                        <p>Uitvoering</p>
                        <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </button>
                    <div id="uitvoering" class="collapse in collapse-div">
                        <input type="text" name="uitvoering[naam]" value="{{ $uitvoering or '' }}">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col col-sm-3"></div><div class="col col-sm-6">
                    <button type="button" class="btn btn-info" data-toggle="collapse" aria-expanded="true" data-target="#carrosserie">
                        <p>Carrosserie</p>
                        <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </button>
                    <div id="carrosserie" class="collapse in collapse-div">
                        <div class="row">
                            <div class="col col-sm-4 nopad-col">
                                <h4>Carrosserie type: </h2>
                            </div>
                            <div class="col col-sm-8">
                                <input type="text" name="carrosserie[type]" value="{{ $carrosserie['type']  or '' }}">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col col-sm-4 nopad-col">
                                <h4>Omschrijving:</h2>
                            </div>
                            <div class="col col-sm-8">
                                <input type="text" name="carrosserie[omschrijving]" value="{{ $carrosserie['omschrijving']   or '' }}">
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col col-sm-3"></div><div class="col col-sm-6">
                    <button type="button" class="btn btn-info" data-toggle="collapse" aria-expanded="true" data-target="#versnelling">
                        <p>Versnelling</p>
                        <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </button>
                    <div id="versnelling" class="collapse in collapse-div">
                        <div class="row">
                            <div class="col col-sm-4 nopad-col">
                                <h4 data-toggle="tooltip" title="Meestal 'Automaat' of 'Handmatig'">type:</h2>
                            </div>
                            <div class="col col-sm-8">
                                <input type="text" name="versnelling[type]" value="{{$versnelling['type'] or ''}}">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col col-sm-4 nopad-col">
                                <h4>Aantal versnellingen:</h2>
                            </div>
                            <div class="col col-sm-8">
                                <input type="text" name="versnelling[aantal]" value="{{ $versnelling['aantal']or ''}}">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col col-sm-3"></div><div class="col col-sm-6">
                    <button type="button" class="btn btn-info" aria-expanded="true" data-toggle="collapse" data-target="#kleur">
                        <p>Kleur</p>
                        <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </button>
                    <div id="kleur" class="collapse in collapse-div">
                        <div class="row">
                            <div class="col col-sm-4 nopad-col">
                                <h4>Eerste kleur</h2>
                            </div>
                            <div class="col col-sm-8">
                                <input type="text" name="kleur[first]" value="{{ $kleur['first'] or ''}}">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col col-sm-4 nopad-col">
                                <h4>Huidige Kleur</h2>
                            </div>
                            <div class="col col-sm-8">
                                <input type="text" name="kleur[current]" value="{{ $kleur['current'] or ''}}">
                            </div>
                        </div>
                    </div>
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
        </div>
    </div>
@endsection