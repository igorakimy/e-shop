<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class AboutController extends Controller
{
    /**
     * Information about shop.
     *
     * @return Response
     */
    public function index(): Response
    {
        return Inertia::render('Shop/About');
    }
}
