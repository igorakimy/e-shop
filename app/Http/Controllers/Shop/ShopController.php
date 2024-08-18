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
     * Главная страница
     *
     * @return Response
     */
    public function index(): Response
    {
        return Inertia::render('Home');
    }

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

    /**
     * Акции
     *
     * @return Response
     */
    public function sales(): Response
    {
        return Inertia::render('Sales');
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
        return Inertia::render('Work');
    }

    /**
     * Техническая поддержка
     *
     * @return Response
     */
    public function techSupport(): Response
    {
        return Inertia::render('TechSupport');
    }

    /**
     * Организациям и ИП/ФЛП
     *
     * @return Response
     */
    public function corporateDepartment(): Response
    {
        return Inertia::render('CorporateDepartment');
    }

    /**
     * Партнёрам
     *
     * @return Response
     */
    public function partners(): Response
    {
        return Inertia::render('Partners');
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
     * Конкретный товар
     *
     * @param Product $product
     * @return Response
     */
    private function renderProduct(Product $product): Response
    {
        return Inertia::render('Shop/Product', []);
    }

    /**
     * Конкретная категория
     *
     * @param Category $category
     * @return Response
     */
    private function renderCategory(Category $category): Response
    {
        return Inertia::render('Shop/Catalog', [
            'title' => $category->name,
            'categories' => $category->children
        ]);
    }
}
