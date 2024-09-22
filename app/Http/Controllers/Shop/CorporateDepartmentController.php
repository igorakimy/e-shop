<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class CorporateDepartmentController extends Controller
{
    /**
     * Show page with information for organizations and entrepreneurs.
     *
     * @return Response
     */
    public function index(): Response
    {
        return Inertia::render('Shop/CorporateDepartment');
    }
}
