<?php

namespace App\Actions\Shop\Brands;

use App\Data\Shop\Brand\BrandData;
use App\Models\Brand;

class ShowBrandBySlug
{
    public function handle(string $slug): BrandData
    {
        $brand = Brand::query()
            ->where('slug', $slug)
            ->firstOrFail();

        return BrandData::from($brand);
    }
}
