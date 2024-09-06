<?php

use App\Enums\ProductAvailability;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Promotion;
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
            $table->uuid();

            $table->string('name');
            $table->string('slug')->unique();
            $table->string('code', 10)->unique();
            $table->integer('price')->default(0);
            $table->string('in_stock')
                ->default(ProductAvailability::NotAvailable->value);
            $table->string('delivery', 10)->nullable();
            $table->text('description')->nullable();
            $table->integer('discount')->default(0);
            $table->string('warranty', 20)->nullable();
            $table->boolean('is_new')->default(false);
            $table->timestamp('expected_at')->nullable();
            $table->boolean('is_hit')->default(false);
            $table->boolean('is_best_price')->default(false);
            $table->boolean('is_markdown')->default(false);
            $table->string('markdown_reason')->nullable();
            $table->string('short_props')->nullable();

            $table->foreignIdFor(Brand::class, 'brand_id')
                ->constrained();
            $table->foreignIdFor(Category::class, 'category_id')
                ->constrained();
            $table->foreignIdFor(Promotion::class, 'promotion_id')
                ->nullable();

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
