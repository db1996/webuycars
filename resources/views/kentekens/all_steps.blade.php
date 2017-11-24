@php
include(app_path().'/includes/functions.php');
$GLOBALS['debug'] = setdebug();
$year = substr($date, -4);
if(isset($versnelling['type'])){
    $type_versnelling = type_versnelling($versnelling['type']);
}
else{
    $type_versnelling = create_type_versnelling_obj();
}
$activetabs = activetabs($errors);
$errorarray = errors($errors);
@endphp
@extends('layouts.app')
@section('pagetype', 'jouwauto-page')
@section('content')
    @include('partials.createinput')
    @include('partials.errors')
    <div class="c-card c-card--small">
        <h1 class="c-card__title c-card__title--small">JOUW AUTO</h1>
        <h2 class="c-card__subtitle c-card__subtitle--small">{{ $handelsbenaming  or   '' }}, {{ $year  or '' }} {{ $brandstof_omschrijving  or '' }}, <span id="kenteken">{{ $kenteken }}</span></h2>
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

        <input type="hidden" name="kenteken" value="{{$kenteken}}">
    </form>
@endsection
