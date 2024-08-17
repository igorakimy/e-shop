<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use App\Models\Url;
use Inertia\Inertia;
use Inertia\Response;

class ShopController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Home');
    }

    public function catalog($path = null): Response
    {
        if ($path === null) {
            $categories = Category::query()
                ->whereDoesntHave('parent')
                ->get();

            return Inertia::render('Shop/Catalog', [
                'title' => 'Каталог',
                'categories' => $categories,
            ]);
        }

        $url = Url::query()
            ->where('address', $path)
            ->firstOrFail();

        $model = $url->model;

        if ($model instanceof Product) {
            return $this->renderProduct($model);
        }

        return $this->renderCategory($model);
    }

    public function sales(): Response
    {
        return Inertia::render('Sales');
    }

    public function clientCard(): Response
    {
        return Inertia::render('ClientCard');
    }

    public function shops(): Response
    {
        return Inertia::render('Shops');
    }

    public function work(): Response
    {
        return Inertia::render('Work');
    }

    public function techSupport(): Response
    {
        return Inertia::render('TechSupport');
    }

    public function corporateDepartment(): Response
    {
        return Inertia::render('CorporateDepartment');
    }

    public function partners(): Response
    {
        return Inertia::render('Partners');
    }

    public function suppliers(): Response
    {
        return Inertia::render('Suppliers');
    }

    public function deliveryAndPayment(): Response
    {
        return Inertia::render('DeliveryAndPayment');
    }

    public function about(): Response
    {
        return Inertia::render('About');
    }

    public function warrantyTerms(): Response
    {
        return Inertia::render('WarrantyTerms');
    }

    public function legalInfo(): Response
    {
        return Inertia::render('LegalInfo');
    }

    public function privacyPolicy(): Response
    {
        return Inertia::render('PrivacyPolicy');
    }

    public function sellingRules(): Response
    {
        return Inertia::render('SellingRules');
    }

    public function siteUsingRules(): Response
    {
        return Inertia::render('SiteUsingRules');
    }

    private function renderProduct(Product $product): Response
    {
        dd(1);
        return Inertia::render('Shop/Product', []);
    }

    private function renderCategory(Category $category): Response
    {
        return Inertia::render('Shop/Catalog', [
            'title' => $category->name,
            'categories' => $category->children
        ]);
    }
}
