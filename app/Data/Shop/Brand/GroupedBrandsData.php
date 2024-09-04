<?php

namespace App\Data\Shop\Brand;

use Illuminate\Support\Collection;
use Spatie\LaravelData\Data;

class GroupedBrandsData extends Data
{
    public function __construct(
        public string $name,

        /** @var Collection<int, BrandData> */
        public Collection $brands,
    )  {
    }
}
