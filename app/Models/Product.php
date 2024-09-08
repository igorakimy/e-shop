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
use Spatie\MediaLibrary\MediaCollections\Models\Media as SpatieMedia;

class Product extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;
    use HasUrlAddress;

    protected $guarded = [];

    protected $appends = [
        'url_address',
        'cashback',
        'photos',
        'gallery_thumbs',
        'last_products_thumb',
        'card_thumbs'
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

    public function galleryThumbs(): Attribute
    {
        return Attribute::make(
            get: function ($value) {
                $gallery = [];
                $media = $this->getMedia(Media::PRODUCTS_COLLECTION);
                /** @var SpatieMedia $item */
                foreach ($media as $item) {
                    $gallery[] = $item->getUrl('gallery-thumb');
                }
                return $gallery;
            }
        );
    }

    public function photos(): Attribute
    {
        return Attribute::make(
            get: function ($value) {
                $photos = [];
                $media = $this->getMedia(Media::PRODUCTS_COLLECTION);
                /** @var SpatieMedia $item */
                foreach ($media as $item) {
                    $photos[] = $item->getUrl();
                }
                return $photos;
            }
        );
    }

    public function cardThumbs(): Attribute
    {
        return Attribute::make(
            get: function ($value) {
                $thumbs = [];
                $media = $this->getMedia(Media::PRODUCTS_COLLECTION);
                /** @var SpatieMedia $item */
                foreach ($media as $item) {
                    $thumbs[] = $item->getUrl('card-thumb');
                }
                return $thumbs;
            }
        );
    }

    public function lastProductsThumb(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => $this->getFirstMediaUrl(
                Media::PRODUCTS_COLLECTION,
                'last_products-thumb'
            ),
        );
    }

    public function registerMediaConversions(?SpatieMedia $media = null): void
    {
        $this->addMediaConversion('gallery-thumb')
            ->keepOriginalImageFormat()
            ->height(50)
            ->quality(100);

        $this->addMediaConversion('last-products-thumb')
            ->keepOriginalImageFormat()
            ->height(80)
            ->quality(100);

        $this->addMediaConversion('card-thumb')
            ->keepOriginalImageFormat()
            ->width(228)
            ->quality(90);

        $this->addMediaConversion('category-thumb')
            ->keepOriginalImageFormat()
            ->width(156)
            ->quality(80);

        $this->addMediaConversion('category-bg-thumb')
            ->keepOriginalImageFormat()
            ->width(228)
            ->quality(80);
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
