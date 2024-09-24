<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class WorkController extends Controller
{
    /**
     * Steelsmart work.
     *
     * @return Response
     */
    public function index(): Response
    {
        return Inertia::render('Shop/Work');
    }
}
