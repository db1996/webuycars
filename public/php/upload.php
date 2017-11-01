<?php

if (empty($*FILES) || $*FILES["file"]["error"]) {
  die('{"OK": 0}');
}

$fileName = $*FILES["file"]["name"];
move_uploaded_file($*FILES["file"]["tmp_name"], "/webuycars/public/php/uploads/$fileName");

die('{"OK": 1}');
?>
