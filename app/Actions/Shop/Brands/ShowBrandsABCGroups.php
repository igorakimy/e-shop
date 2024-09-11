<?php

namespace App\Actions\Shop\Brands;

use App\Data\Shop\Brand\GroupedBrandsData;
use App\Models\Brand;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class ShowBrandsABCGroups
{
    public function handle(): Collection
    {
        $rawQueryPart = '';
        foreach (str_split('ABCDEFGHIJKLMNOPQRSTUVWXYZ') as $letter) {
            $rawQueryPart .= "WHEN name ILIKE '$letter%' THEN '$letter' ";
        }

        /** @var Collection $brandsByGroups */
        $brandsByGroups = Brand::query()
            ->select(
                'name', 'slug',
                DB::raw("CASE WHEN name ~ '^[0-9]' THEN '0-9' $rawQueryPart ELSE 'А-Я' END AS brand_group")
            )
            ->with(['products', 'media'])
            ->orderBy('brand_group')
            ->orderBy('name')
            ->get()
            ->groupBy('brand_group')
            ->map(function ($items, $key) {
                return [
                    'name' => $key,
                    'brands' => $items
                ];
            });

        return GroupedBrandsData::collect($brandsByGroups->values());
    }
}
