<?php

namespace App\Data\Shop\Url;

use Spatie\LaravelData\Data;

class UrlData extends Data
{
    public function __construct(
        public string $address,
    ) {
    }
}
