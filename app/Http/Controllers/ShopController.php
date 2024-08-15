<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class ShopController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Home');
    }

    public function sales(): Response
    {
        return Inertia::render('Sales');
    }

    public function clientCard(): Response
    {
        return Inertia::render('ClientCard');
    }

    public function shops(): Response
    {
        return Inertia::render('Shops');
    }

    public function work(): Response
    {
        return Inertia::render('Work');
    }

    public function techSupport(): Response
    {
        return Inertia::render('TechSupport');
    }

    public function corporateDepartment(): Response
    {
        return Inertia::render('CorporateDepartment');
    }

    public function partners(): Response
    {
        return Inertia::render('Partners');
    }

    public function suppliers(): Response
    {
        return Inertia::render('Suppliers');
    }

    public function deliveryAndPayment(): Response
    {
        return Inertia::render('DeliveryAndPayment');
    }

    public function about(): Response
    {
        return Inertia::render('About');
    }

    public function warrantyTerms(): Response
    {
        return Inertia::render('WarrantyTerms');
    }

    public function legalInfo(): Response
    {
        return Inertia::render('LegalInfo');
    }

    public function privacyPolicy(): Response
    {
        return Inertia::render('PrivacyPolicy');
    }

    public function sellingRules(): Response
    {
        return Inertia::render('SellingRules');
    }

    public function siteUsingRules(): Response
    {
        return Inertia::render('SiteUsingRules');
    }
}
