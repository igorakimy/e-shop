<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class ShopController extends Controller
{
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
}
