<?php

namespace App\Models;

use App\Enums\ProductAvailability;
use App\Traits\HasUrlAddress;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Product extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;
    use HasUrlAddress;

    protected $guarded = [];

    protected $appends = [
        'url_address',
        'cashback'
    ];

    protected $casts = [
        'in_stock' => ProductAvailability::class,
    ];

    public function brand(): BelongsTo
    {
        return $this->belongsTo(Brand::class);
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function promotion(): BelongsTo
    {
        return $this->belongsTo(Promotion::class);
    }

    public function propertyValues(): BelongsToMany
    {
        return $this->belongsToMany(
            related: PropertyValue::class,
            table: 'product_property_value',
            foreignPivotKey: 'product_id',
            relatedPivotKey: 'property_value_id',
        );
    }

    protected function cashback(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => ceil(($this->price / 100) * 5),
        );
    }

    public function generateUrl(): static
    {
        $slug = $this->slug;

        if (! empty($this->id)) {

            $this->url()->delete();

            $this->url()->save(new Url([
                'address' => $this->category->url->address . '/' . $slug,
                'model_id' => $this->id,
                'model_type' => self::class,
            ]));
        }

        return $this;
    }

    protected static function booted(): void
    {
        static::saved(function (self $product) {
            $product->generateUrl();
        });
    }
}
