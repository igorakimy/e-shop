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
        Schema::create('product_property_value', function (Blueprint $table) {
            $table->foreignId('product_id')->constrained();
            $table->foreignId('property_value_id')->constrained();
            $table->primary(['product_id', 'property_value_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_property_value');
    }
};
