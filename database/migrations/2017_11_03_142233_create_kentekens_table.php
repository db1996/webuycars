<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateKentekensTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('kentekens', function (Blueprint $table) {
            $table->increments('id');
            $table->string('kenteken')->unique;
            $table->string('kmstand');
            $table->string('uitvoering');
            $table->string('carrosserietype');
            $table->string('carrosserieomschrijving');
            $table->string('versnellingtype');
            $table->integer('versnellingaantal');
            $table->string('kleureerste');
            $table->string('kleurhuidige');
            $table->string('voornaam');
            $table->string('achternaam');
            $table->string('email');
            $table->string('telefoonnummer');
            $table->boolean('schadevrij');
            $table->boolean('rijdbaar');
            $table->boolean('onderhoudsboekje');
            $table->integer('buitenzijde');
            $table->integer('interieur');
            $table->integer('technischestaat');
            $table->integer('bandenprofiel');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('kentekens');
    }
}
