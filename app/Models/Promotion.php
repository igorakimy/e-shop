<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Promotion extends Model implements HasMedia
{
    use InteractsWithMedia;

    public function products(): HasMany
    {
        return $this->hasMany(Product::class);
    }
}
