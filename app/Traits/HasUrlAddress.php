<?php

namespace App\Traits;

use App\Models\Url;
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
}
