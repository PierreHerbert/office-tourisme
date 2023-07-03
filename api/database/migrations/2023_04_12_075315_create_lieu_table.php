<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('lieu', function (Blueprint $table) {
            $table->id();
            $table->string('nomLieu');
            $table->string('adresseLieu');
            $table->decimal('longitude', 10, 7);
            $table->decimal('latitude', 10, 7);
            $table->string('descriptionLieu');


            $table->bigInteger('categorie_id')->unsigned(); 
            $table->foreign('categorie_id')
                ->references('id')
                ->on('categorie')
                ->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lieu');
    }
};
