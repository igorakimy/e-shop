<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use App\Models\Product;
use App\Models\Promotion;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    /**
     * Home page.
     *
     * @return Response
     */
    public function index(): Response
    {
        $activePromotion = Promotion::query()
            ->where('active', true)
            ->first();

        $promotionProducts = Product::query()
            ->with(['media', 'promotion'])
            ->whereRelation('promotion', function ($query) use ($activePromotion) {
                $query->whereNotNull('promotion_id')
                    ->where('promotion_id', $activePromotion?->id);
            })
            ->limit(10)
            ->inRandomOrder()
            ->get();

        $expectedProducts = Product::query()
            ->with(['media'])
            ->whereNotNull('expected_at')
            ->limit(10)
            ->get();

        $bestPriceProducts = Product::query()
            ->with(['media'])
            ->where('is_best_price', true)
            ->limit(10)
            ->inRandomOrder()
            ->get();

        $hitProducts = Product::query()
            ->with(['media'])
            ->where('is_hit', true)
            ->limit(10)
            ->inRandomOrder()
            ->get();

        $brands = Brand::query()
            ->with('media')
            ->whereHas('media')
            ->limit(6)
            ->inRandomOrder()
            ->get();

        return Inertia::render(
            'Shop/Home',
            compact(
                'promotionProducts',
                'expectedProducts',
                'bestPriceProducts',
                'hitProducts',
                'brands'
            )
        );
    }
}
