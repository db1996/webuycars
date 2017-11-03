<div id="step3" class="tab-pane {{$activetabs->stap3}}">
    @include('partials.radio_buttons')
    @include('partials.star_rating')
    <div class="info-step3 info">
        <div class="container">
            <div class="row">
                <div class="col-sm-3"></div><div class="col-sm-6 upload-images">
                    <a id="browse" data-url="{{url("/upload")}}" href="javascript:;"><p>Upload afbeeldingen</p><p>[browse...]</p> </a>
                    <a id="start-upload" href="javascript:;">[Start Upload]</a>
                    <ul id="filelist"></ul>
                </div>
            </div>
            <div class="row">
                <div class="col col-sm-3"></div><div class="col col-sm-6">
                    <?php create_radio_button("schadevrij", "Is de auto schadevrij?")?>
                </div>
            </div>
            <div class="row">
                <div class="col col-sm-3"></div><div class="col col-sm-6">
                    <?php create_radio_button("rijdbaar", "Is je auto rijdbaar?")?>
                </div>
            </div>
            <div class="row">
                <div class=" col col-sm-3"></div><div class="col col-sm-6">
                    <?php create_radio_button("onderhoudsboekje", "Onderhoudsboekje aanwezig?")?>
                </div>
            </div>
            <div class="row">
                <div class="col col-sm-3"></div><div class="col col-sm-6">
                    <div class="normalinput starinput errtooltip {{ $errorarray['errorclasses']['buitenzijde'] }}" data-toggle="tooltip" data-placement="right"
                    title="{{ $errorarray['errornames']['buitenzijde'] }}" >
                        <p class="pseudo_label">Staat buitenzijde</p>
                        <?php create_star_rating("buitenzijde")?>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col col-sm-3"></div><div class="col col-sm-6">
                    <div class="normalinput starinput errtooltip {{ $errorarray['errorclasses']['interieur'] }}" data-toggle="tooltip" data-placement="right"
                    title="{{ $errorarray['errornames']['interieur'] }}">
                        <p class="pseudo_label">Staat interieur</p>
                        <?php create_star_rating("interieur")?>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col col-sm-3"></div><div class="col col-sm-6">
                    <div class="normalinput starinput errtooltip {{ $errorarray['errorclasses']['technischestaat'] }}" data-toggle="tooltip" data-placement="right"
                    title="{{ $errorarray['errornames']['technischestaat'] }}">
                        <p class="pseudo_label">Technische staat</p>
                        <?php create_star_rating("technischestaat")?>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col col-sm-3"></div><div class="col col-sm-6">
                    <div class="normalinput starinput errtooltip {{ $errorarray['errorclasses']['bandenprofiel'] }}" data-toggle="tooltip" data-placement="right"
                    title="{{ $errorarray['errornames']['bandenprofiel'] }}">
                        <p class="pseudo_label">Staat bandenprofiel</p>
                        <?php create_star_rating("bandenprofiel")?>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col col-sm-3"></div><div class="col col-sm-6">
                    <span class="currency errtooltip {{ $errorarray['errorclasses']['price'] }}" data-toggle="tooltip" data-placement="right"
                    title="{{ $errorarray['errornames']['price'] }}" >€<input class="currencyinput" required type="number" name="price" value="" placeholder="Verwachte prijs in euro's....."></span>
                </div>
            </div>
            <div class="row">
                <div class="col col-sm-3"></div><div class="col col-sm-6">
                    <input class="puretextinput" required type="text" name="accesoires" value="" placeholder="opties en accesoires...">
                </div>
            </div>
            <div class="row">
                <div class="col col-sm-3"></div><div class="col col-sm-6">
                    <button type="button" class="btn btn-info volgende-stap" onclick="startDropzone();">
                        <p>Volgende</p>
                        <img id="svg-rol" src="{{asset('img/Spinner.svg')}}" alt="">
                    </button>
                </div>
            </div>
            <?php createsteps(4, 2, 6, 3);?>
            <div class="row">
                <div class="col-sm-3"></div>
                <div class="col col-sm-6 tablenr ">
                    <a class="btn btn-info vorige-stap" href="#step2" data-toggle="tab"><p><i class="fa fa-chevron-left" aria-hidden="true"></i>&nbsp;Terug</p></a>
                </div>
            </div>
        </div>
    </div>
</div>
