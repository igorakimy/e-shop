<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class PrivacyPolicyController extends Controller
{
    /**
     * Privacy policy page.
     *
     * @return Response
     */
    public function index(): Response
    {
        return Inertia::render('Shop/PrivacyPolicy');
    }
}
