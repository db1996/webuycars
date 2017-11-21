<div id="step1" class="tab-pane {{$activetabs->stap1}}">
    <div class="info-step1 info">
        <div class="container">
            <div class="row">
                <div class="col-sm-3 hidden-sm"></div><div class="col col-sm-12 col-md-6">
                    <button type="button" class="c-btn c-btn--collapse" data-toggle="collapse" aria-expanded="true" data-target="#kmstand">
                        <p>KM stand</p>
                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                    </button>
                    <div id="kmstand" class="c-btn__collapse collapse in">
                        <div class="c-btn__collapse__l-wrap">
                            <div class="c-input__arrow">
                                <i class="c-input__arrow__icon fa fa-chevron-down" aria-hidden="true"></i>
                            </div>
                            <select class="c-input c-input--select" name="kmstand" id="sel1">
                                {{ create_selects(old('kmstand')) }}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-3 hidden-sm"></div><div class="col col-sm-12 col-md-6">
                    <button type="button" class="c-btn c-btn--collapse" data-toggle="collapse" aria-expanded="true" data-target="#uitvoering">
                        <p>Uitvoering</p>
                        <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </button>
                    <div id="uitvoering" class="collapse in c-btn__collapse" >
                        {{create_inputs('naam', $errorarray, 'uitvoering', $uitvoering)}} {{-- creates an input with the right variables --}}
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-3 hidden-sm"></div><div class="col col-sm-12 col-md-6">
                    <button type="button" class="c-btn c-btn--collapse" data-toggle="collapse" aria-expanded="true" data-target="#carrosserie">
                        <p>Carrosserie</p>
                        <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </button>
                    <div id="carrosserie" class="collapse in c-btn__collapse">
                        <div class="row">
                            <div class="col col-sm-4 has-nopad">
                                <h4>Carrosserie type: </h2>
                            </div>
                            <div class="col col-sm-8">
                                {{create_inputs('type', $errorarray, 'carrosserie', $carrosserie['type'])}} {{-- creates an input with the right variables --}}
                            </div>
                        </div>
                        <div class="row">
                            <div class="col col-sm-4 has-nopad">
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
                <div class="col-sm-3 hidden-sm"></div><div class="col col-sm-12 col-md-6">
                    <button type="button" class="c-btn c-btn--collapse" data-toggle="collapse" aria-expanded="true" data-target="#versnelling">
                        <p>Versnelling</p>
                        <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </button>
                    <div id="versnelling" class="collapse in c-btn__collapse">
                        <div class="row">
                            <div class="col col-sm-4 has-nopad">
                                <h4>type:</h2>
                            </div>
                            <div class="col col-sm-8">
                                <div class="c-btn__collapse__l-wrap">
                                    <div id="selectside2" class="c-input__arrow">
                                        <i class="c-input__arrow__icon c-input__arrow__icon--top fa fa-chevron-down" aria-hidden="true"></i>
                                    </div>
                                    <select class="c-input c-input--select" name="versnelling[type]">
                                        <option {{ $type_versnelling->automaat }} value="A">Automaat</option>
                                        <option {{ $type_versnelling->handmatig }} value="H">Handmatig</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col col-sm-4 has-nopad">
                                <h4>Aantal versnellingen:</h2>
                            </div>
                            <div class="col col-sm-8">

                                {{create_inputs('aantal', $errorarray, 'versnelling', (isset($versnelling['aantal']) ? $versnelling['aantal'] : ''), 'number')}} {{-- creates an input with the right variables --}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-3 hidden-sm"></div><div class="col col-sm-12 col-md-6">
                    <button type="button" class="c-btn c-btn--collapse" aria-expanded="true" data-toggle="collapse" data-target="#kleur">
                        <p>Kleur</p>
                        <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </button>
                    <div id="kleur" class="collapse in c-btn__collapse">
                        <div class="row">
                            <div class="col col-sm-4 has-nopad">
                                <h4>Eerste kleur</h2>
                            </div>
                            <div class="col col-sm-8">
                                {{create_inputs('first', $errorarray, 'kleur', $kleur['first'])}} {{-- creates an input with the right variables --}}
                            </div>
                        </div>
                        <div class="row">
                            <div class="col col-sm-4 has-nopad">
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
                <div class="col-sm-3 hidden-sm"></div><div class="col col-sm-12 col-md-6">
                    <a id="gotostap2" class="c-btn check-stap" href="#step2" data-toggle="">Volgende</a>
                </div>
            </div>
            {{-- Creates The progress on the bottom --}}
            @include('partials.steps', [
                'numofsteps' => 4,
                'active' => 0,
                'width' => "12 col-md-6" ,
                'offset' => 3,
            ])
        </div>
    </div>
</div>
