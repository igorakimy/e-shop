<?php

namespace App\Data\Shop\Brand;

use App\Data\Shop\Product\ProductData;
use App\Models\Brand;
use Illuminate\Support\Collection;
use Illuminate\Support\Optional;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\Lazy;

class BrandData extends Data
{
    public function __construct(
        public ?int $id,
        public string $name,
        public string $slug,
        public ?string $logo,
        public ?string $vendor_url,
        public ?string $description,

        /** @var Collection<int, ProductData> */
        public Collection|Lazy $products,
    ) {
    }

    public static function fromModel(Brand $brand): self
    {
        return new self(
            $brand->id,
            $brand->name,
            $brand->slug,
            $brand->logo,
            $brand->vendor_url,
            $brand->description,
            Lazy::create(fn() => ProductData::collect($brand->products))
        );
    }
}
