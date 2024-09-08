<?php

namespace App\Data\Csv;

use Spatie\LaravelData\Data;

class ProductPropertyData extends Data
{
    public function __construct(
        public string $product,
        public ?string $group,
        public string $name,
        public ?string $value,
        public float $position,
    ) {
    }
}
