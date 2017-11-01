<div id="step2" class="tab-pane">
    <div class="info-step2 info">
        <div class="container">
            <form action="{{url('/kenteken/stap3')}}" method="post">
                {!! csrf_field() !!}
                <div class="row">
                    <div class="col col-sm-3"></div><div class="col col-sm-6">

                        <input required type="text" value="<?php
                        $first_name = session('contact');
                        if (isset($first_name['voornaam'])){
                            echo $first_name['voornaam'];
                        }
                        ?>" name="voornaam" placeholder="Voornaam...">
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
            <?php createsteps(4, 1, 6, 3);?>
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
</div>
