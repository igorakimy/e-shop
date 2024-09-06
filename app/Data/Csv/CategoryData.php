<?php

namespace App\Data\Csv;

use Spatie\LaravelData\Data;

class CategoryData extends Data
{
    public function __construct(
        public string $name,
        public string $slug,
        public ?string $icon,
        public ?string $parent
    ) {
    }
}
