<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class AuthClientController extends Controller
{
    public function registration(): Response
    {
        return Inertia::render('Shop/Registration');
    }

    public function signIn()
    {

    }

    public function signUp()
    {

    }
}
