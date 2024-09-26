<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class SellingRulesController extends Controller
{
    /**
     * Selling rules page.
     *
     * @return Response
     */
    public function index(): Response
    {
        return Inertia::render('Shop/SellingRules');
    }
}
