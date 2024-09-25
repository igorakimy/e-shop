<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class DeliveryAndPaymentController extends Controller
{
    /**
     * Delivery and payment page.
     *
     * @return Response
     */
    public function index(): Response
    {
        return Inertia::render('Shop/DeliveryAndPayment');
    }
}
