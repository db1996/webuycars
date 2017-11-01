<div id="step2" class="tab-pane ">
    <div class="info-step2 info">
        <div class="container">
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
                    <a onclick="window.scrollTo(0, 0);" class="btn btn-info volgende-stap" href="#step3" data-toggle="tab">Volgende</a>
                </div>
            </div>
            <?php createsteps(4, 1, 6, 3);?>
            <div class="row">
                <div class="col-sm-3"></div>
                <div class="col col-sm-6 tablenr ">
                    <a  class="btn btn-info vorige-stap" href="#step1" data-toggle="tab"><p><i class="fa fa-chevron-left" aria-hidden="true"></i>&nbsp;Terug</p></a>
                </div>
            </div>
        </div>
    </div>
</div>
