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
    /**
     * Каталог товаров
     *
     * @param $path
     * @return Response
     */
    public function catalog($path = null): Response
    {
        if ($path === null) {
            $categories = Category::query()
                ->whereDoesntHave('parent')
                ->orderBy('position')
                ->get();

            return Inertia::render('Shop/Catalog', [
                'title' => 'Каталог',
                'subCategories' => $categories,
            ]);
        }

        $url = Url::query()
            ->where('address', $path)
            ->firstOrFail();

        $model = $url->model;

        if ($model instanceof Product) {
            $model->load(['promotion', 'brand', 'propertyValues']);
            return $this->renderProduct($model);
        }

        return $this->renderCategory($model);
    }

    /**
     * Карта клиента
     *
     * @return Response
     */
    public function clientCard(): Response
    {
        return Inertia::render('ClientCard');
    }

    /**
     * Магазины
     *
     * @return Response
     */
    public function shops(): Response
    {
        return Inertia::render('Shops');
    }

    /**
     * Работа в SteelSmart
     *
     * @return Response
     */
    public function work(): Response
    {
        return Inertia::render('Shop/Work');
    }

    /**
     * Поставщикам
     *
     * @return Response
     */
    public function suppliers(): Response
    {
        return Inertia::render('Suppliers');
    }

    /**
     * Доставка и оплата
     *
     * @return Response
     */
    public function deliveryAndPayment(): Response
    {
        return Inertia::render('DeliveryAndPayment');
    }

    /**
     * О компании
     *
     * @return Response
     */
    public function about(): Response
    {
        return Inertia::render('About');
    }

    /**
     * Условия гарантийного обслуживания
     *
     * @return Response
     */
    public function warrantyTerms(): Response
    {
        return Inertia::render('WarrantyTerms');
    }

    /**
     * Юридическая информация
     *
     * @return Response
     */
    public function legalInfo(): Response
    {
        return Inertia::render('LegalInfo');
    }

    /**
     * Политика конфиденциальности
     *
     * @return Response
     */
    public function privacyPolicy(): Response
    {
        return Inertia::render('PrivacyPolicy');
    }

    /**
     * Правила продажи товаров
     *
     * @return Response
     */
    public function sellingRules(): Response
    {
        return Inertia::render('SellingRules');
    }

    /**
     * Правила пользования сайта
     *
     * @return Response
     */
    public function siteUsingRules(): Response
    {
        return Inertia::render('SiteUsingRules');
    }

    /**
     * Сравнение товаров
     *
     * @return Response
     */
    public function compare(): Response
    {
        return Inertia::render('Shop/Compare');
    }

    /**
     * Избранные товары
     *
     * @return Response
     */
    public function favorite(): Response
    {
        return Inertia::render('Shop/Favorite');
    }

    /**
     * Корзина
     *
     * @return Response
     */
    public function cart(): Response
    {
        return Inertia::render('Shop/Cart');
    }

    /**
     * Заказы
     *
     * @return Response
     */
    public function orders(): Response
    {
        return Inertia::render('Shop/Orders');
    }

    /**
     * Уценка
     *
     * @return Response
     */
    public function markdown(): Response
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

    /**
     * Конкретный товар
     *
     * @param Product $product
     * @return Response
     */
    private function renderProduct(Product $product): Response
    {
        $productProperties = $product->propertyValues
            ->groupBy('property.group.name')
            ->map(function ($props, $group) {
                return [
                    'group' => $group,
                    'properties' => $props,
                ];
            })
            ->values();

        return Inertia::render(
            'Shop/Product',
            compact('product', 'productProperties')
        );
    }

    /**
     * Конкретная категория
     *
     * @param Category $category
     * @return Response
     */
    private function renderCategory(Category $category): Response
    {
        $products = $category->products()
            ->with(['promotion', 'media'])
            ->orderByDesc('price')
            ->paginate(40);

        return Inertia::render('Shop/Catalog', [
            'title' => $category->name,
            'subCategories' => $category->children,
            'products' => $products
        ]);
    }
}
