@php
include(app_path().'/includes/functions.php');
$year = substr($date, -4);
$activetabs = activetabs($errors);
if(isset($versnelling['type'])){
    $type_versnelling = type_versnelling($versnelling['type']);
}
else{
    $type_versnelling = create_type_versnelling_obj();
}
$errorarray = errors($errors);
$debug = setdebug();
@endphp
@extends('layouts.app')
@section('pagetype', 'jouwauto-page')
@section('content')
    @include('partials.createinput')
    <div class="title-container">
        <h1>JOUW AUTO</h1>
        <h2>{{ $handelsbenaming  or   '' }}, {{ $year  or '' }} {{ $brandstof_omschrijving  or '' }}, <span id="kenteken">{{ $kenteken }}</span></h2>
    </div>
    <div class="container tabs-nav">
        <div class="row">
            <div class="col-sm-3"></div><div class="col-sm-6">
                <ul class="nav nav-tabs">
                    <li class="active"><a id="tab-step1-button" href="#step1" data-toggle="tab">Tab title</a></li>
                    <li><a id="tab-step2-button" href="#step2" data-toggle="tab">Tab title</a></li>
                    <li><a id="tab-step3-button" href="#step3" data-toggle="tab">Tab title</a></li>
                </ul>
            </div>
        </div>
    </div>
    <form id="all-form" action="{{url('/kenteken/store')}}" enctype="multipart/form-data" method="POST">
        {{ csrf_field() }}
        <div class="tab-content clearfix">
            @include('kentekens.step1')
            @include('kentekens.step2')
            @include('kentekens.step3')
        </div>
        <button type="submit" id="submit-all" class="btn btn-info volgende-stap">
            <p>Volgende</p>
        </button>
        {{-- <div class="flash-image-mes alert-danger">
            <div class="title-div">
                <h3>Er zijn geen afbeeldingen geselecteerd!</h3>
            </div>
            <div class="para-div">
                <p>weet je zeker dat je door wilt gaan zonder afbeeldingen? De kans om je auto te verkopen wordt veel groter met afbeeldingen</p>
            </div>
            <div class="button-div">
                <button id="ga-door">Ga door</button>
                <button id="ga-terug">Terug</button>
            </div>
        </div> --}}
        <input type="hidden" name="kenteken" value="{{$kenteken}}">
    </form>
@endsection
