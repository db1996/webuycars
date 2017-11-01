<?php  function create_radio_button($name, $title){?>
<div class="radio-wrap">
    <p class="pseudo_label">{{ $title }}</p>
    <div class="radios">
        <div class="yes single-radio">
            <input type="radio" name="{{ $name }}" id="{{ $name }}_yes" checked value="1">
            <label for="{{ $name }}_yes" class="after_radio">Ja</label>
        </div>
        <div class="no single-radio">
            <input type="radio" name="{{ $name }}" id="{{ $name }}_no" value="0">
            <label for="{{ $name }}_no" class="after_radio">Nee</label>
        </div>
    </div>
</div>
<?php }?>
