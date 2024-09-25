<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class LegalInfoController extends Controller
{
    /**
     * Legal information about shop.
     *
     * @return Response
     */
    public function index(): Response
    {
        return Inertia::render('Shop/LegalInfo');
    }
}
