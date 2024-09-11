<?php

namespace App\Actions\Shop\Brands;

use App\Data\Shop\Brand\BrandData;
use App\Models\Brand;

class ShowBrandBySlug
{
    public function handle(string $slug): BrandData
    {
        $brand = Brand::query()
            ->with([
                'products',
                'products.promotion',
                'products.url',
                'products.media',
                'products.category.url',
            ])
            ->where('slug', $slug)
            ->firstOrFail();

        return BrandData::from($brand)
            ->include(
                'products',
                'products.category',
                'products.category.url',
                'products.url',
                'products.promotion',
                'products.media'
            );
    }
}
