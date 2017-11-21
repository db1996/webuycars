<div class="c-input c-input--radio c-input--nopad">
    <p class="c-radios__label">{{ $title }}</p>
    <div class="c-radios">
        <div class="c-radios__single-radio c-radios__single-radio--yes">
            <input type="radio" class="c-radios__input" name="{{ $name }}" id="{{ $name }}_yes" @if(old($name)) checked @endif value="1">
            <label for="{{ $name }}_yes" class="c-radios__single-radio-label" class="after_radio">Ja</label>
        </div>
        <div class="c-radios__single-radio c-radios__single-radio--no">
            <input type="radio" class="c-radios__input" name="{{ $name }}" id="{{ $name }}_no" @if(!old($name)) checked @endif value="0">
            <label for="{{ $name }}_no" class="c-radios__single-radio-label" class="after_radio">Nee</label>
        </div>
    </div>
</div>
