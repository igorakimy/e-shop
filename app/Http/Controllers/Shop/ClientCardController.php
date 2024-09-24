<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class ClientCardController extends Controller
{
    /**
     * Client card.
     *
     * @return Response
     */
    public function index(): Response
    {
        return Inertia::render('Shop/ClientCard');
    }
}
