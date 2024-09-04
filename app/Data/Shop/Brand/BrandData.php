<?php

namespace App\Data\Shop\Brand;

use Spatie\LaravelData\Data;

class BrandData extends Data
{
    public function __construct(
        public string $name,
        public string $slug,
        public ?string $icon,
        public ?string $vendor_url,
        public ?string $description,
    ) {
    }
}
