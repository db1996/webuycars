<?php
$debug = setdebug();
function setdebug(){
    return 1;
}
//returns which tab should be active
# Parameter: Errors array
function activetabs($errors){
    $activetabs = (object) ['stap1' => '', 'stap2' => '', 'stap3' => ''];
    $firstError = $errors->first();
    if (str_contains($firstError, ['uitvoering.naam', 'carrosserie.type', 'versnellingen.type', 'versnelling.aantal','kleur.first', 'kleur.current', 'kmstand'])){
        $activetabs->stap1 = 'active';
    }
    else if (str_contains($firstError, ['voornaam', 'achternaam', 'email', 'telefoonnummer', 'postcode'])){
        $activetabs->stap2 = 'active';
    }
    else if (str_contains($firstError, ['buitenzijde', 'interieur', 'technischestaat', 'bandenprofiel', 'price'])){
        $activetabs->stap3 = 'active';
    }
    else{
        $activetabs->stap3 = 'active';
    }
    return $activetabs;
}

//returns which of the 'type' dropdown is autoselected
# Parameter: String | 'A', 'a', 'H' OR 'h'
function type_versnelling($type){
    $type_versnelling = create_type_versnelling_obj();
    if ($type == "A" || $type == "a") {
        $type_versnelling->automaat = 'selected';
    }
    else if ($type == "H" || $type == "h"){
        $type_versnelling->handmatig = 'selected';
    }
    return $type_versnelling;
}

function create_type_versnelling_obj(){
    $type_versnelling = (object)['handmatig' => '', 'automaat' => ''];
    return $type_versnelling;
}
function create_selects($oldkm){
    $nums = [5000, 10000, 20000, 30000, 40000, 60000, 80000, 100000, 125000, 150000, 200000];
    foreach ($nums as $index => $num) {
        $text = "Tot";
        if ($index == count($nums) -1){
            $text = "Meer dan";
        }?>
        <option <?=($oldkm == $num ? "selected":"")?> value="<?=$num?>">
            <?=$text?>&nbsp;<?=number_format($num,0,",", ".")?>
        </option>
    <?php }
}
function errors($errors){
    $errorclasses = [
        'kmstand' => '',
        'uitvoering.naam' => '',
        'carrosserie.type' => '',
        'carrosserie.omschrijving' => '',
        'versnelling.aantal' => '',
        'kleur.first' => '',
        'kleur.current' => '',
        'voornaam' => '',
        'achternaam' => '',
        'email' => '',
        'telefoonnummer' => '',
        'postcode' => '',
        'buitenzijde' => '',
        'interieur' => '',
        'technischestaat' => '',
        'bandenprofiel' => '',
        'price' => '',
    ];
    $errornames = [
        'kmstand' => '',
        'uitvoering.naam' => '',
        'carrosserie.type' => '',
        'carrosserie.omschrijving' => '',
        'versnelling.aantal' => '',
        'kleur.first' => '',
        'kleur.current' => '',
        'voornaam' => '',
        'achternaam' => '',
        'email' => '',
        'telefoonnummer' => '',
        'postcode' => '',
        'buitenzijde' => '',
        'interieur' => '',
        'technischestaat' => '',
        'bandenprofiel' => '',
        'price' => '',
    ];
    $asx = [];
    foreach ($errors->all() as $index => $value) {
        $strings = preg_split ('/ /', $value);
        $asx[$index] = $strings;
        if ( $asx[$index][count($asx[$index]) - 1]== 'verplicht.') {
            $var = $asx[$index][1];
            $errornames[$var] = "Dit veld is verplicht";
            $errorclasses[$var] = "inputerror";
        }
    }
    $fullarray = [
        'errornames' => $errornames,
        'errorclasses' => $errorclasses
    ];
    return $fullarray;
}
