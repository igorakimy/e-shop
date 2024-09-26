<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Inertia\Inertia;
use Inertia\Response;

class MarkdownController extends Controller
{
    /**
     * Show markdown products by groups.
     *
     * @return Response
     */
    public function index(): Response
    {
        $productGroups = Product::query()
            ->with(['category.url', 'media'])
            ->where('is_markdown', true)
            ->get()
            ->groupBy('category.name')
            ->map(function ($products, $category) {
                return [
                    'category' => $category,
                    'products' => $products
                ];
            })->values();

        return Inertia::render(
            'Shop/Markdown',
            compact('productGroups')
        );
    }
}
