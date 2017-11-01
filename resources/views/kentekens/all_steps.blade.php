@php
// dd(session()->all());
$year = substr($date, -4);
$type_versnelling = '';
if (isset($versnelling->type))
{
    $type_versnelling = type_versnelling($versnelling->type);
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
    <form action="{{url('/kenteken/store')}}" enctype="multipart/form-data" method="POST">
        {{ csrf_field() }}
        <div class="tab-content clearfix">
            @include('kentekens.step1')
            @include('kentekens.step2')
            @include('kentekens.step3')
        </div>
    </form>


@endsection
