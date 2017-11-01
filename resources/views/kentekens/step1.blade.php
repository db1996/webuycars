<div id="step1" class="tab-pane active">
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
                        <input required type="text" name="uitvoering[naam]" value="{{ $uitvoering or '' }}">
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
                                <input required type="text" name="carrosserie[type]" value="{{ $carrosserie['type']  or '' }}">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col col-sm-4 nopad-col">
                                <h4>Omschrijving:</h2>
                            </div>
                            <div class="col col-sm-8">
                                <input required type="text" name="carrosserie[omschrijving]" value="{{ $carrosserie['omschrijving']   or '' }}">
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
                                <div id="selectside2" class="select-side">
                                    <i class="fa fa-chevron-down" aria-hidden="true"></i>
                                </div>
                                <select class="" name="versnelling[type]">
                                    <option <?php if(isset($versnelling[ 'type'])){ if ($versnelling[ 'type']=="A" ) { echo 'selected'; } } ?> value="A">Automaat</option>
                                    <option <?php if(isset($versnelling[ 'type'])){ if ($versnelling[ 'type']=="H" ) { echo 'selected'; } } ?> value="H">Handmatig</option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col col-sm-4 nopad-col">
                                <h4>Aantal versnellingen:</h2>
                            </div>
                            <div class="col col-sm-8">
                                <input required type="text" name="versnelling[aantal]" value="{{ $versnelling['aantal'] or ''}}">
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
                                <input required type="text" name="kleur[first]" value="{{ $kleur['first'] or ''}}">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col col-sm-4 nopad-col">
                                <h4>Huidige Kleur</h2>
                            </div>
                            <div class="col col-sm-8">
                                <input required type="text" name="kleur[current]" value="{{ $kleur['current'] or ''}}">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col col-sm-3"></div><div class="col col-sm-6">
                    <a class="btn btn-info volgende-stap" onclick="window.scrollTo(0, 0);" href="#step2" data-toggle="tab">Volgende</a>
                </div>
            </div>
            @include('partials.steps')
            <?php createsteps(4, 0, 6, 3);?>
        </div>
    </div>
</div>
