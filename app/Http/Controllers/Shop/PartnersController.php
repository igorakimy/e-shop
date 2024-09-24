<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class PartnersController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Shop/Partners');
    }
}
