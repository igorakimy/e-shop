<?php

namespace App\Traits;

use App\Models\Url;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Relations\MorphOne;

/**
 * @property Url $url
 *
 * @method morphOne(string $class, string $string)
 */
trait HasUrlAddress
{
    public function url(): MorphOne
    {
        return $this->morphOne(Url::class, 'model');
    }

    protected function urlAddress(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => config('app.url') . '/shop/' . $this->url->address
        );
    }
}
