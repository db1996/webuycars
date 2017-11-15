<div id="step1" class="tab-pane {{$activetabs->stap1}}">
    <div class="info-step1 info">
        <div class="container">
            <div class="row">
                <div class="col col-sm-12">
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
                            <select name="kmstand" id="sel1">
                                {{ create_selects(old('kmstand')) }}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col col-sm-3"></div><div class="col col-sm-6">
                    <button type="button" class="btn btn-info collapse-button" data-toggle="collapse" aria-expanded="true" data-target="#uitvoering">
                        <p>Uitvoering</p>
                        <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </button>
                    <div id="uitvoering" class="collapse in collapse-div" >
                        {{create_inputs('naam', $errorarray, 'uitvoering', $uitvoering)}} {{-- creates an input with the right variables --}}
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col col-sm-3"></div><div class="col col-sm-6">
                    <button type="button" class="btn btn-info collapse-button" data-toggle="collapse" aria-expanded="true" data-target="#carrosserie">
                        <p>Carrosserie</p>
                        <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </button>
                    <div id="carrosserie" class="collapse in collapse-div">
                        <div class="row">
                            <div class="col col-sm-4 nopad-col">
                                <h4>Carrosserie type: </h2>
                                </div>
                                <div class="col col-sm-8">
                                    {{create_inputs('type', $errorarray, 'carrosserie', $carrosserie['type'])}} {{-- creates an input with the right variables --}}
                                </div>
                            </div>
                            <div class="row">
                                <div class="col col-sm-4 nopad-col">
                                    <h4>Omschrijving:</h2>
                                    </div>
                                    <div class="col col-sm-8">
                                        {{create_inputs('omschrijving', $errorarray, 'carrosserie', (isset($carrosserie['omschrijving']) ? $carrosserie['omschrijving'] : ''))}} {{-- creates an input with the right variables --}}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col col-sm-3"></div><div class="col col-sm-6">
                            <button type="button" class="btn btn-info collapse-button" data-toggle="collapse" aria-expanded="true" data-target="#versnelling">
                                <p>Versnelling</p>
                                <i class="fa fa-chevron-down" aria-hidden="true"></i>
                            </button>
                            <div id="versnelling" class="collapse in collapse-div">
                                <div class="row">
                                    <div class="col col-sm-4 nopad-col">
                                        <h4>type:</h2>
                                        </div>
                                        <div class="col col-sm-8">
                                            <div id="selectside2" class="select-side">
                                                <i class="fa fa-chevron-down" aria-hidden="true"></i>
                                            </div>
                                            <select class="" name="versnelling[type]">
                                                <option {{ $type_versnelling->automaat }} value="A">Automaat</option>
                                                <option {{ $type_versnelling->handmatig }} value="H">Handmatig</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col col-sm-4 nopad-col">
                                            <h4>Aantal versnellingen:</h2>
                                            </div>
                                            <div class="col col-sm-8">
{{create_inputs('aantal', $errorarray, 'versnelling', (isset($versnelling['aantal']) ? $versnelling['aantal'] : ''))}} {{-- creates an input with the right variables --}}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col col-sm-3"></div><div class="col col-sm-6">
                                    <button type="button" class="btn btn-info collapse-button" aria-expanded="true" data-toggle="collapse" data-target="#kleur">
                                        <p>Kleur</p>
                                        <i class="fa fa-chevron-down" aria-hidden="true"></i>
                                    </button>
                                    <div id="kleur" class="collapse in collapse-div">
                                        <div class="row">
                                            <div class="col col-sm-4 nopad-col">
                                                <h4>Eerste kleur</h2>
                                                </div>
                                                <div class="col col-sm-8">
                                                    {{create_inputs('first', $errorarray, 'kleur', $kleur['first'])}} {{-- creates an input with the right variables --}}
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col col-sm-4 nopad-col">
                                                    <h4>Huidige Kleur</h2>
                                                    </div>
                                                    <div class="col col-sm-8">
                                                        {{create_inputs('current', $errorarray, 'kleur', $kleur['current'])}} {{-- creates an input with the right variables --}}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col col-sm-3"></div><div class="col col-sm-6">
                                            <a id="gotostap2" class="btn btn-info volgende-stap check-stap" href="#step2" data-toggle="">Volgende</a>
                                        </div>
                                    </div>
                                    {{-- Creates The progress on the bottom --}}
                                    @include('partials.steps', [
                                        'numofsteps' => 4,
                                        'active' => 0,
                                        'width' => 6,
                                        'offset' => 3,
                                    ])
                                </div>
                            </div>
                        </div>
