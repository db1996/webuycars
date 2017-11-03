<?php
function create_inputs( $naam, $errorarray, $arrname = '', $aditval = ''){
    if ($arrname != ''){
        $namestr = $arrname . "[" . $naam . "]";
        $namestr2 = $arrname . "." . $naam;
    }
    else{
        $namestr = $naam;
        $namestr2 = $naam;
    }
    ?>
    <input required type="text"
    name="{{$namestr}}"
    <?php if($aditval != ''){?>
    value="{{ (old($namestr2) != "" ? old($namestr2): $aditval) }}"
    <?php }else{?>
    value="{{ old($namestr2) }}"
    <?php }?>
    class="errtooltip {{ $errorarray['errorclasses'][$namestr2] }}"
    placeholder="{{$namestr2}}..."
    data-toggle="tooltip"
    data-placement="right"
    title="{{ $errorarray['errornames'][$namestr2] }}">
<?php }?>
