<?php
$GLOBALS['debug'] = 0;
function create_inputs( $naam, $errorarray, $arrname = '', $aditval = '', $type = 'text'){
    if ($arrname != ''){
        $namestr = $arrname . "[" . $naam . "]";
        $namestr2 = $arrname . "." . $naam;
    }
    else{
        $namestr = $naam;
        $namestr2 = $naam;
    }
    $debug = $GLOBALS['debug'];
    ?>

    <input required type="{{$type}}"
    name="{{$namestr}}"
    <?php if($aditval != ''){?>
    value="{{ (old($namestr2) != "" ? old($namestr2): $aditval) }}"
    <?php }else{?>
    value="{{ ($debug==0 ? old($namestr2) : str_random('8'))}}"
    <?php }?>
    class="errtooltip {{ $errorarray['errorclasses'][$namestr2] }}"
    placeholder="{{ (preg_match('/[\W]+/',$namestr2)? '' : $namestr2 . '...') }}"
    data-toggle="tooltip"
    data-placement="right"
    title="{{ $errorarray['errornames'][$namestr2] }}">
<?php }?>
