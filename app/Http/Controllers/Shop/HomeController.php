<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use App\Models\Product;
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
        $products = Product::query()
            ->with(['media'])
            ->limit(10)
            ->get();

        $brands = Brand::query()
            ->with('media')
            ->whereHas('media')
            ->limit(6)
            ->get();

        return Inertia::render(
            'Shop/Home',
            compact('products', 'brands')
        );
    }
}
