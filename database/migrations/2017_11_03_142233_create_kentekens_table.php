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
            $table->string('kenteken');
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
            $table->string('postcode');
            $table->boolean('schadevrij');
            $table->boolean('rijdbaar');
            $table->boolean('onderhoudsboekje');
            $table->integer('buitenzijde');
            $table->integer('interieur');
            $table->integer('technischestaat');
            $table->integer('bandenprofiel');
            $table->boolean('confirmed');
            $table->text('confirmation_code');
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
