<?php

use App\Models\Brand;
use App\Models\Category;
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
        Schema::create('products', function (Blueprint $table) {
            $table->id();

            $table->string('name');
            $table->string('slug')->unique();
            $table->string('code', 10)->unique();
            $table->integer('price')->default(0);
            $table->boolean('in_stock')->default(false);
            $table->string('delivery', 10);
            $table->text('description');
            $table->integer('discount')->default(0);
            $table->string('warranty', 20);
            $table->boolean('is_new')->default(false);
            $table->boolean('is_wait')->default(false);
            $table->boolean('is_hit')->default(false);
            $table->boolean('is_best_price')->default(false);
            $table->boolean('is_markdown')->default(false);
            $table->string('markdown_reason')->nullable();

            $table->foreignIdFor(Brand::class, 'brand_id')
                ->constrained();
            $table->foreignIdFor(Category::class, 'category_id')
                ->constrained();

            $table->index(['category_id', 'slug']);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
