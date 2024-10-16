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
        Schema::create('shops', function (Blueprint $table) {
            $table->id();

            $table->string('address');
            $table->string('phones');
            $table->tinyInteger('start_day')->unsigned();
            $table->tinyInteger('end_day')->unsigned();
            $table->time('open_time');
            $table->time('close_time');
            $table->float('latitude')->nullable();
            $table->float('longitude')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shops');
    }
};
