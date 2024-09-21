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
        Schema::create('client_cards', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('number');
            $table->unsignedBigInteger('bounces_amount')->default(0);
            $table->string('barcode')->nullable();
            $table->unsignedBigInteger('client_id')->nullable();

            $table->foreign('client_id')
                ->nullable()
                ->references('id')
                ->on('users')
                ->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('client_cards');
    }
};
