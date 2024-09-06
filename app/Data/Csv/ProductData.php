<?php

namespace App\Data\Csv;

use Spatie\LaravelData\Data;

class ProductData extends Data
{
    public function __construct(
        public string $name,
        public string $uuid,
        public string $code,
        public float $price,
        public string $in_stock,
        public ?string $delivery,
        public ?string $description,
        public float $discount,
        public ?string $warranty,
        public bool $is_new,
        public ?string $expected_at,
        public bool $is_hit,
        public bool $is_best_price,
        public bool $is_markdown,
        public ?string $markdown_reason,
        public string $category,
        public string $brand,
        public ?string $promotion,
        public ?string $short_props,
    ){
    }
}
