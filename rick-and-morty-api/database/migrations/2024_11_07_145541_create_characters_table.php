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
        Schema::create('characters', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('status');
            $table->string('species');
            $table->string('type')->nullable(); // O tipo ou subespécie pode ser nulo
            $table->string('gender');
            $table->string('origin_name'); // Nome da origem do personagem
            $table->string('origin_url')->nullable(); // URL da origem (pode ser opcional)
            $table->string('location_name'); // Nome da última localização conhecida
            $table->string('location_url')->nullable(); // URL da localização (pode ser opcional)
            $table->string('image')->nullable(); // URL da imagem do personagem
            $table->timestamps(); // Criado e atualizado em
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('characters');
    }
};
