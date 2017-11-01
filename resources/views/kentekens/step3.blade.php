<div id="step3" class="tab-pane">
    @include('partials.radio_buttons')
    @include('partials.star_rating')
    <div class="info-step3 info">
        <div class="container">
            <div class="row">
                <div class="col-sm-3"></div><div class="col-sm-6">
                    <a id="browse" data-url="{{url("/upload")}}" href="javascript:;">[Browse...]</a>
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
                    <div class="normalinput starinput">
                        <p class="pseudo_label">Staat buitenzijde</p>
                        <?php create_star_rating("buitenzijde")?>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col col-sm-3"></div><div class="col col-sm-6">
                    <div class="normalinput starinput">
                        <p class="pseudo_label">Staat interieur</p>
                        <?php create_star_rating("interieur")?>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col col-sm-3"></div><div class="col col-sm-6">
                    <div class="normalinput starinput">
                        <p class="pseudo_label">Technische staat</p>
                        <?php create_star_rating("technischestaat")?>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col col-sm-3"></div><div class="col col-sm-6">
                    <div class="normalinput starinput">
                        <p class="pseudo_label">Staat bandenprofiel</p>
                        <?php create_star_rating("bandenprofiel")?>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col col-sm-3"></div><div class="col col-sm-6">
                    <span class="currency">€<input class="currencyinput" required type="number" name="price" value="" placeholder="Verwachte prijs in euro's....."></span>
                </div>
            </div>
            <div class="row">
                <div class="col col-sm-3"></div><div class="col col-sm-6">
                    <input class="puretextinput" required type="text" name="accesoires" value="" placeholder="opties en accesoires...">
                </div>
            </div>
            <div class="row">
                <div class="col col-sm-3"></div><div class="col col-sm-6">
                    <button type="submit" id="submit-all" class="btn btn-info volgende-stap" >
                        <p>Volgende</p>
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
{{asset('php/upload.php')}}
<script type="text/javascript">

var uploader = new plupload.Uploader({
    browse_button: 'browse', // this can be an id of a DOM element or the DOM element itself
    url: $('#browse').attr('data-url'),
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

uploader.init();
uploader.bind('FilesAdded', function(up, files) {
    var html = '';
    plupload.each(files, function(file) {
        html += '<li id="' + file.id + '">' + file.name + ' (' + plupload.formatSize(file.size) + ') <b></b></li>';
    });
    document.getElementById('filelist').innerHTML += html;
});
uploader.bind('UploadProgress', function(up, file) {
    document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = '<span>' + file.percent + "%</span>";
});
uploader.bind('Error', function(up, err) {
    document.getElementById('console').innerHTML += "\nError #" + err.code + ": " + err.message;
});
document.getElementById('start-upload').onclick = function() {
    uploader.start();
};
</script>
