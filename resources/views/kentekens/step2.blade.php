<div id="step2" class="tab-pane {{$activetabs->stap2}}">
    <div class="info-step2 info">
        <div class="container">
            <div class="row">
                <div class="col col-sm-3"></div><div class="col col-sm-6">
                    {{create_inputs('voornaam', $errorarray)}} {{-- creates an input with the right variables --}}
                </div>
            </div>
            <div class="row">
                <div class="col col-sm-3"></div><div class="col col-sm-6">
                    {{create_inputs('achternaam', $errorarray)}}
                </div>
            </div>
            <div class="row">
                <div class="col col-sm-3"></div><div class="col col-sm-6">
                    <input id="emailTB" required type="text"
                    value="{{old('email')}}{{($GLOBALS['debug'] == 1 ? "dylanbos1996@gmail.com" : "")}}" class="errtooltip {{ $errorarray['errorclasses']['email'] }}" data-toggle="tooltip" data-placement="right"
                    title="{{ $errorarray['errornames']['email'] }}" name="email" placeholder="E-Mail...">
                    <i id="email-fa" class='font-awesome-checks checks-nook fa fa-check-circle fa-lg' aria-hidden='true'></i>
                </div>
            </div>
            <div class="row">
                <div class="col col-sm-3"></div><div class="col col-sm-6">
                    <input id="telTB" required type="text" value="{{old('telefoonnummer')}}{{($GLOBALS['debug'] == 1 ? "0641251850" : "")}}"
                    class="errtooltip {{ $errorarray['errorclasses']['telefoonnummer'] }}"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="{{ $errorarray['errornames']['telefoonnummer'] }}" name="telefoonnummer" placeholder="Telefoonnummer...">
                    <i id="tel-fa" class='font-awesome-checks checks-nook fa fa-check-circle fa-lg' aria-hidden='true'></i>
                </div>
            </div>
            <div class="row">
                <div class="col col-sm-3"></div><div class="col col-sm-6">
                    <input id="posTB" class="errtooltip {{ $errorarray['errorclasses']['postcode'] }}"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="{{ $errorarray['errornames']['postcode'] }}"  required type="text" value="{{old('postcode')}}{{($GLOBALS['debug'] == 1 ? "5961KE" : "")}}" name="postcode" placeholder="Postcode...">
                    <i id="pos-fa" class='font-awesome-checks checks-nook fa fa-check-circle fa-lg' aria-hidden='true'></i>
                </div>
            </div>
            <div class="row">
                <div class="col col-sm-3"></div><div class="col col-sm-6">
                    <a id="gotostap3" class="btn btn-info volgende-stap check-stap" href="#step3" data-toggle="">Volgende</a>
                </div>
            </div>
            {{-- Creates The progress on the bottom --}}
            @include('partials.steps', [
                'numofsteps' => 4,
                'active' => 1,
                'width' => 6,
                'offset' => 3,
            ])
            <div class="row">
                <div class="col-sm-3"></div>
                <div class="col col-sm-6 tablenr ">
                    <a class="btn btn-info vorige-stap" href="#step1" data-toggle="tab"><p><i class="fa fa-chevron-left" aria-hidden="true"></i>&nbsp;Terug</p></a>
                </div>
            </div>
        </div>
    </div>
</div>
