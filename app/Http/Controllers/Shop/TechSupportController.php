<?php

namespace App\Http\Controllers\Shop;

use App\Data\Shop\TechSupport\CreateRequestData;
use App\Http\Controllers\Controller;
use App\Models\TechSupportRequest;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TechSupportController extends Controller
{
    /**
     * Show the technical support page with form.
     *
     * @return Response
     */
    public function index(): Response
    {
        return Inertia::render('Shop/TechSupport');
    }

    /**
     * Create a new request to tech support.
     *
     * @param Request $request
     * @return RedirectResponse
     */
    public function createRequest(Request $request): RedirectResponse
    {
        $data = CreateRequestData::from($request);

        $user = User::query()
            ->where('nickname', $data->login)
            ->orWhere('email', $data->login)
            ->first();

        if (! $user) {
            return back()->withErrors([
                'login' => 'Пользователь с таким email/логином не зарегистрирован'
            ]);
        }

        $data = $data->except('login')
            ->additional(['client_id' => $user->id])
            ->toArray();

        TechSupportRequest::query()
            ->create($data);

        return redirect()->route('home');
    }
}
