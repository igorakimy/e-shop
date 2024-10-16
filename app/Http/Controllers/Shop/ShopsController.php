<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use App\Models\Shop;
use Inertia\Inertia;
use Inertia\Response;

class ShopsController extends Controller
{
    /**
     * Shops addresses.
     *
     * @return Response
     */
    public function index(): Response
    {
        $shops = Shop::query()->get();

        return Inertia::render(
            'Shop/Shops',
            compact('shops')
        );
    }
}
