<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class BrandController extends Controller
{
    /**
     * Список брендов
     *
     * @return Response
     */
    public function index(): Response
    {
        return Inertia::render('Shop/Brands');
    }

    /**
     * Конкретный бренд
     *
     * @param string $slug
     * @return Response
     */
    public function show(string $slug): Response
    {
        return Inertia::render('Shop/Brand');
    }
}
