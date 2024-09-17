<?php

namespace App\Http\Controllers\Shop;

use App\Data\Shop\User\ClientCardCreateData;
use App\Data\Shop\User\UserUpdateData;
use App\Http\Controllers\Controller;
use App\Models\ClientCard;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    /**
     * User profile page.
     *
     * @return Response
     */
    public function profile(): Response
    {
        return Inertia::render('Shop/Profile');
    }

    /**
     * Update personal user data.
     *
     * @param User $user
     * @param Request $request
     * @return RedirectResponse
     */
    public function update(User $user, Request $request): RedirectResponse
    {
        $data = UserUpdateData::from($request);

        $user->fill($data->toArray());

        if ($user->save()) {
            return back();
        }

        return back()->withErrors([
            'error' => 'Ошибка сохранения данных'
        ]);
    }

    /**
     * Create client card and attach to the user.
     *
     * @param User $user
     * @param Request $request
     * @return RedirectResponse
     */
    public function createCard(User $user, Request $request): RedirectResponse
    {
        $data = ClientCardCreateData::from($request);

        $user->fill($data->except('number')->toArray());
        $user->save();

        $clientCard = ClientCard::query()
            ->where('number', $data->number)
            ->whereNull('client_id')
            ->first();

        if (! $clientCard) {
            return back()->withErrors([
                'number'=> 'Карта с таким номером не существует'
            ]);
        }

        if ($clientCard->update(['client_id' => $user->id])) {
            return back();
        }

        return back()->withErrors([
            'number' => 'Не удалось добавить карту'
        ]);
    }
}
