@extends('layouts.app')
@section('pagetype', 'jouwauto-page')
@section('content')
    <div class="title-container">
        <h1>Contact gegevens</h1>
        <h2>Vul hier je contact gegevens in.</h2>
    </div>
    <div class="grey-between"></div>
    <div class="info-step3">
        <div class="container">
            <form action="{{url('/kenteken/stap3')}}" method="post">
                {!! csrf_field() !!}
                <div class="row">
                    <div class="col col-sm-3"></div><div class="col col-sm-6">
                        <div id="filechoosing">
                            <input multiple type="file" name="file" id="file" class="inputfile" />
                            <label for="file">Foto bestanden kiezen</label>
                            <label class="align-right" for="file"><i class="fa fa-plus" aria-hidden="true"></i>&nbsp;&nbsp;<i class="fa fa-camera" aria-hidden="true"></i></label>

                        </div>
                        <img id="blah" src="#" alt="your image" />
                    </div>
                </div>
                <div class="row">
                    <div class="col col-sm-3"></div><div class="col col-sm-6">
                        <input required type="text" name="achternaam" value="<?php
                        $first_name = session('contact');
                        if (isset($first_name['achternaam'])){
                            echo $first_name['achternaam'];
                        }
                        ?>" placeholder="achternaam...">
                    </div>
                </div>
                <div class="row">
                    <div class="col col-sm-3"></div><div class="col col-sm-6">
                        <input required type="text" value="<?php
                        $first_name = session('contact');
                        if (isset($first_name['email'])){
                            echo $first_name['email'];
                        }
                        ?>" name="email" placeholder="E-Mail...">
                    </div>
                </div>
                <div class="row">
                    <div class="col col-sm-3"></div><div class="col col-sm-6">
                        <input required type="text" value="<?php
                        $first_name = session('contact');
                        if (isset($first_name['telefoonnummer'])){
                            echo $first_name['telefoonnummer'];
                        }
                        ?>" name="telefoonnummer" placeholder="Telefoonnummer...">
                    </div>
                </div>
                <div class="row">
                    <div class="col col-sm-3"></div><div class="col col-sm-6">
                        <input required type="text" value="<?php
                        $first_name = session('contact');
                        if (isset($first_name['postcode'])){
                            echo $first_name['postcode'];
                        }
                        ?>" name="postcode" placeholder="Postcode...">
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
            <?php createsteps(4, 2, 6, 3);?>
            <div class="row">
                <div class="col-sm-3"></div>
                <div class="col col-sm-6 tablenr ">
                    <form action="{{ url('/kenteken/stap1') }}" method="post">
                        <input type="hidden" name="kenteken" value="{{session('kenteken')}}">
                        {{ csrf_field() }}
                        <button type="submit" class="btn btn-info vorige-stap" >
                            <p><i class="fa fa-chevron-left" aria-hidden="true"></i>&nbsp;Terug</p>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
