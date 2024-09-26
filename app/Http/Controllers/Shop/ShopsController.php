<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class ShopsController extends Controller
{
    /**
     * Shops addresses.
     *
     * @return Response
     */
    public function index(): Response
    {
        return Inertia::render('Shop/Shops');
    }
}
