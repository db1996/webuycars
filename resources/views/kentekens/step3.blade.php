<div id="step3" class="tab-pane {{$activetabs->stap3}}">
    <div class="c-info-tab">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div id="file-preview-custom" class="file-preview-custom"></div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-3 hidden-sm"></div><div class="col-sm-12 col-md-6 upload-images">
                    <input id="filedata" accept=".jpg,.gif,.png,.jpeg," name="filedata[]" lang="nl" type="file" multiple class="file-loading">
                    <script>
                    $("#filedata").fileinput({
                        uploadAsync: false,
                        maxFileCount: 10,
                        allowedFileTypes: ['image'],
                        elPreviewContainer: '.file-preview-custom',
                        'language': 'nl',
                        'showUpload': false,
                        'showCancel': false,
                        'showIndicator': false
                    });
                    </script>
                </div>
            </div>
            <div class="row">
                <div class="col hidden-sm col-sm-3"></div><div class="col col-md-6 col-sm-12">
                    @include('partials.radio_buttons', ['name' => 'schadevrij', 'title' => 'Is je auto schadevrij?'])
                </div>
            </div>
            <div class="row">
                <div class="col hidden-sm col-sm-3"></div><div class="col col-md-6 col-sm-12">
                    @include('partials.radio_buttons', ['name' => 'rijdbaar', 'title' => 'Is je auto rijdbaar?'])
                </div>
            </div>
            <div class="row">
                <div class=" col col-sm-3 hidden-sm"></div><div class="col col-md-6 col-sm-12">
                    @include('partials.radio_buttons', ['name' => 'onderhoudsboekje','title' => 'Onderhoudsboekje aanwezig?'])
                </div>
            </div>
            <div class="row">
                <div class="col hidden-sm col-sm-3"></div><div class="col col-md-6 col-sm-12">
                    <div class="c-input c-input--star errtooltip {{ $errorarray['errorclasses']['buitenzijde'] }}" data-toggle="tooltip" data-placement="right"
                    title="{{ $errorarray['errornames']['buitenzijde'] }}" >
                        <p class="c-input__star-label">Staat buitenzijde</p>
                        @include('partials.star_rating', ['name' => "buitenzijde"])
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col hidden-sm col-sm-3"></div><div class="col col-md-6 col-sm-12">
                    <div class="c-input c-input--star errtooltip {{ $errorarray['errorclasses']['interieur'] }}" data-toggle="tooltip" data-placement="right"
                    title="{{ $errorarray['errornames']['interieur'] }}">
                        <p class="c-input__star-label">Staat interieur</p>
                        @include('partials.star_rating', ['name' => "interieur"])
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col hidden-sm col-sm-3"></div><div class="col col-md-6 col-sm-12">
                    <div class="c-input c-input--star errtooltip {{ $errorarray['errorclasses']['technischestaat'] }}" data-toggle="tooltip" data-placement="right"
                    title="{{ $errorarray['errornames']['technischestaat'] }}">
                        <p class="c-input__star-label">Technische staat</p>
                        @include('partials.star_rating', ['name' => "technischestaat"])
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col hidden-sm col-sm-3"></div><div class="col col-md-6 col-sm-12">
                    <div class="c-input c-input--star errtooltip {{ $errorarray['errorclasses']['bandenprofiel'] }}" data-toggle="tooltip" data-placement="right"
                    title="{{ $errorarray['errornames']['bandenprofiel'] }}">
                        <p class="c-input__star-label">Staat bandenprofiel</p>
                        @include('partials.star_rating', ['name' => "bandenprofiel"])
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col hidden-sm col-sm-3"></div><div class="col col-md-6 col-sm-12">
                    <span class="c-input c-input__currency errtooltip {{ $errorarray['errorclasses']['price'] }}" data-toggle="tooltip" data-placement="right"
                    title="{{ $errorarray['errornames']['price'] }}">€
                        <input class="c-input--currency js-parent" required type="number" name="price" value="{{old('price')}}" placeholder="Verwachte prijs in euro's.....">
                    </span>
                </div>
            </div>
            <div class="row">
                <div class="col hidden-sm col-sm-3"></div><div class="col col-md-6 col-sm-12">
                    <input class="c-input errtooltip" required type="text" name="accesoires" value="{{old('accesoires')}}" placeholder="opties en accesoires...">
                </div>
            </div>
            <div class="row">
                <div class="col hidden-sm col-sm-3"></div><div class="col col-md-6 col-sm-12">
                    <button type="submit" class="c-btn check-stap">
                        <p>Volgende</p>
                        <img class="c-load-icon" src="{{asset('img/Spinner.svg')}}" alt="">
                    </button>
                </div>
            </div>
            {{-- Creates The progress on the bottom --}}
            @include('partials.steps', [
                'numofsteps' => 4,
                'active' => 2,
                'width' => "12 col-md-6",
                'offset' => "3 hidden-xs"
            ])
            <div class="row">
                <div class="col-sm-3"></div>
                <div class="col col-sm-6 tablenr ">
                    <a id="button" class="c-btn c-btn--vorige" href="#step2" data-toggle="tab"><p><i class="fa fa-chevron-left" aria-hidden="true"></i>&nbsp;Terug</p></a>
                </div>
            </div>
        </div>
    </div>
</div>
