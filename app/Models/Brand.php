<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Brand extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;

    protected $guarded = [];

    protected $appends = ['logo'];

    public function products(): HasMany
    {
        return $this->hasMany(Product::class);
    }

    public function logo(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => $this->getFirstMediaUrl(Media::BRANDS_COLLECTION)
        );
    }
}
