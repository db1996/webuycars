<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $fillable = ['kenteken_id', 'filename', 'originalfilename', 'kenteken', 'id', 'created_at', 'updated_at'];
}
