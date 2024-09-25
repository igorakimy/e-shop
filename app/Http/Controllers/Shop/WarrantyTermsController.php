<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class WarrantyTermsController extends Controller
{
    /**
     * Warranty terms page.
     *
     * @return Response
     */
    public function index(): Response
    {
        return Inertia::render('Shop/WarrantyTerms');
    }
}
