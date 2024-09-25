<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class SuppliersController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Shop/Suppliers');
    }
}
