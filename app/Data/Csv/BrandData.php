<?php

namespace App\Data\Csv;

use Spatie\LaravelData\Data;

class BrandData extends Data
{
    public function __construct(
        public string $name,
        public string $slug,
        public ?string $vendor_url,
        public ?string $image,
        public ?string $description,
    ) {
    }
}
