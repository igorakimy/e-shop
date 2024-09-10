<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Promotion extends Model implements HasMedia
{
    use InteractsWithMedia;

    protected $appends = [
        'preview',
        'banner',
    ];

    public function products(): HasMany
    {
        return $this->hasMany(Product::class);
    }

    public function preview(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => $this->getFirstMediaUrl(Media::PROMOTIONS_COLLECTION)
        );
    }

    public function banner(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => $this->getFirstMediaUrl(Media::PROMOTION_BANNERS_COLLECTION)
        );
    }
}
