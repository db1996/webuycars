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
                    value="{{old('email')}}" class="errtooltip {{ $errorarray['errorclasses']['email'] }}" data-toggle="tooltip" data-placement="right"
                    title="{{ $errorarray['errornames']['email'] }}" name="email" placeholder="E-Mail...">
                    <i id="email-fa" class='font-awesome-checks checks-nook fa fa-check-circle fa-lg' aria-hidden='true'></i>
                </div>
            </div>
            <div class="row">
                <div class="col col-sm-3"></div><div class="col col-sm-6">
                    <input id="telTB" required type="text" value="{{old('telefoonnummer')}}"
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
                    title="{{ $errorarray['errornames']['postcode'] }}"  required type="text" value="{{old('postcode')}}" name="postcode" placeholder="Postcode...">
                    <i id="pos-fa" class='font-awesome-checks checks-nook fa fa-check-circle fa-lg' aria-hidden='true'></i>
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
