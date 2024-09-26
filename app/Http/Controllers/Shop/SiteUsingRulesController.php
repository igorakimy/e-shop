<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class SiteUsingRulesController extends Controller
{
    /**
     * Site using rules page.
     *
     * @return Response
     */
    public function index(): Response
    {
        return Inertia::render('Shop/SiteUsingRules');
    }
}
