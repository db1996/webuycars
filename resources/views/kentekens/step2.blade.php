<div id="step2" class="tab-pane {{$activetabs->stap2}}">
    <div class="info-step2 info">
        <div class="container">
            <div class="row">
                <div class="col-sm-3 hidden-sm"></div><div class="col col-sm-12 col-md-6">
                    {{create_inputs('voornaam', $errorarray)}} {{-- creates an input with the right variables --}}
                </div>
            </div>
            <div class="row">
                <div class="col-sm-3 hidden-sm"></div><div class="col col-sm-12 col-md-6">
                    {{create_inputs('achternaam', $errorarray)}}
                </div>
            </div>
            <div class="row">
                <div class="col-sm-3 hidden-sm"></div><div class="col col-sm-12 col-md-6">
                    <input id="emailTB" required type="text"
                    value="{{old('email')}}{{($GLOBALS['debug'] == 1 ? "dylanbos1996@gmail.com" : "")}}" class="c-input errtooltip {{ $errorarray['errorclasses']['email'] }}" data-toggle="tooltip" data-placement="right"
                    title="{{ $errorarray['errornames']['email'] }}" name="email" placeholder="E-Mail...">
                    <i id="email-fa" class='c-input__check c-input__check--nook fa fa-check-circle fa-lg' aria-hidden='true'></i>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-3 hidden-sm"></div><div class="col col-sm-12 col-md-6">
                    <input id="telTB" required type="text" value="{{old('telefoonnummer')}}{{($GLOBALS['debug'] == 1 ? "0641251850" : "")}}"
                    class="c-input errtooltip {{ $errorarray['errorclasses']['telefoonnummer'] }}"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="{{ $errorarray['errornames']['telefoonnummer'] }}" name="telefoonnummer" placeholder="Telefoonnummer...">
                    <i id="tel-fa" class='c-input__check c-input__check--nook fa fa-check-circle fa-lg' aria-hidden='true'></i>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-3 hidden-sm"></div><div class="col col-sm-12 col-md-6">
                    <input id="posTB" class="c-input errtooltip {{ $errorarray['errorclasses']['postcode'] }}"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="{{ $errorarray['errornames']['postcode'] }}"  required type="text" value="{{old('postcode')}}{{($GLOBALS['debug'] == 1 ? "5961KE" : "")}}" name="postcode" placeholder="Postcode...">
                    <i id="pos-fa" class='c-input__check c-input__check--nook fa fa-check-circle fa-lg' aria-hidden='true'></i>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-3 hidden-sm"></div><div class="col col-sm-12 col-md-6">
                    <a id="gotostap3" class="c-btn check-stap" href="#step3" data-toggle="">Volgende</a>
                </div>
            </div>
            {{-- Creates The progress on the bottom --}}
            @include('partials.steps', [
                'numofsteps' => 4,
                'active' => 1,
                'width' => "12 col-md-6",
                'offset' => "3 hidden-xs",
            ])
            <div class="row">
                <div class="col-sm-3"></div>
                <div class="col col-sm-6 tablenr ">
                    <a class="c-btn c-btn--vorige" href="#step1" data-toggle="tab"><p><i class="fa fa-chevron-left" aria-hidden="true"></i>&nbsp;Terug</p></a>
                </div>
            </div>
        </div>
    </div>
</div>
