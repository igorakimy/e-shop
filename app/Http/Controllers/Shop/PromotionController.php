<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use App\Models\Promotion;
use Inertia\Inertia;
use Inertia\Response;

class PromotionController extends Controller
{
    public function index(): Response
    {
        $promotions = Promotion::query()->get();

        return Inertia::render(
            'Shop/Promotions',
            compact('promotions')
        );
    }

    public function show(Promotion $promotion): Response
    {
        $promotion->load([
            'products',
            'products.promotion',
            'products.category',
            'products.media',
        ]);

        $promotionProductGroups = $promotion->products
            ->groupBy('category.name')
            ->map(function ($products, $category) {
                return [
                    'category' => $category,
                    'products' => $products
                ];
            })->values();

        return Inertia::render(
            'Shop/Promotion',
            compact('promotion', 'promotionProductGroups')
        );
    }
}
