<?php

namespace App\Data\Shop\Category;

use App\Data\Shop\Url\UrlData;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\Optional;

class CategoryData extends Data
{
    public function __construct(
        public Optional|int $id,
        public string $name,
        public string $slug,
        public ?string $icon,
        public ?self $parent,
        public UrlData $url,
    ) {
    }
}
