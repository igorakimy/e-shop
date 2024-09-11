<?php

namespace App\Http\Controllers\Shop;

use App\Actions\Shop\Brands\ShowBrandBySlug;
use App\Actions\Shop\Brands\ShowBrandsABCGroups;
use App\Data\Shop\Product\ProductData;
use App\Http\Controllers\Controller;
use App\Models\Product;
use Inertia\Inertia;
use Inertia\Response;

class BrandController extends Controller
{
    public function __construct(
        private readonly ShowBrandBySlug $showBrandBySlug,
        private readonly ShowBrandsABCGroups $showBrandsABCGroups,
    ) {
    }

    /**
     * Список брендов
     *
     * @return Response
     */
    public function index(): Response
    {
        $brandsGroups = $this->showBrandsABCGroups->handle();

        return Inertia::render('Shop/Brands', compact('brandsGroups'));
    }

    /**
     * Конкретный бренд
     *
     * @param string $slug
     * @return Response
     */
    public function show(string $slug): Response
    {
        $brand = $this->showBrandBySlug->handle($slug);

        $brandProductGroups = $brand->products->groupBy(function (ProductData $product) {
            $product->include('url', 'promotion');
            return $product->category->name;
        })->map(function ($products, $category) {
            return [
                'category' => $category,
                'products' => $products
            ];
        })->values();

        return Inertia::render(
            'Shop/Brand',
            compact('brand', 'brandProductGroups')
        );
    }
}
