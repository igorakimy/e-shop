<?php

namespace App\Http\Controllers\Shop;

use App\Data\Shop\Auth\ConfirmCodeData;
use App\Data\Shop\Auth\SignInData;
use App\Data\Shop\Auth\SignUpData;
use App\Enums\LoginType;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Notifications\SendTwoFactorCode;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use Inertia\Response;

class AuthClientController extends Controller
{
    /**
     * Show registration page.
     *
     * @return RedirectResponse|Response
     */
    public function registration(): RedirectResponse|Response
    {
        if (Auth::check()) {
            return redirect()->route('users.profile');
        }

        return Inertia::render('Shop/Registration');
    }

    /**
     * Request user registration.
     *
     * @param Request $request
     * @return RedirectResponse
     */
    public function signUp(Request $request): RedirectResponse
    {
        $data = SignUpData::from($request);

        $existUser = User::query()
            ->where('phone', $data->phone)
            ->orWhere('email', $data->email)
            ->first();

        if ($existUser) {
            return redirect()
                ->route('registration')
                ->withErrors([
                    'phone' => 'Пользователь с этим телефоном или email уже зарегистрирован!'
                ]);
        }

        $password = config('auth.default_password');

        $user = User::query()->create([
            'nickname' => $data->nickname,
            'full_name' => $data->full_name,
            'email' => $data->email,
            'phone' => $data->phone,
            'password' => Hash::make($password)
        ]);

        $credentials = [
            'email' => $user->email,
            'phone' => $user->phone,
            'password' => $password
        ];

        if (Auth::once($credentials)) {

            /** @var User $user */
            $user = $request->user();

            $user->generateTwoFactorCode();

            $loginType = LoginType::Email;
            $user->notify(new SendTwoFactorCode($loginType));

            Session::put('userId', $user->id);
            Session::put('loginType', $loginType->value);

            return back();
        }

        return back()->withErrors([
            'phone' => 'The provided credentials do not match our records.',
        ]);
    }

    /**
     * Request user login.
     *
     * @param Request $request
     * @return RedirectResponse
     */
    public function signIn(Request $request): RedirectResponse
    {
        $data = SignInData::from($request);

        $credentials = [
            'password' => config('auth.default_password')
        ];

        if ($data->email) {
            $credentials['email'] = $data->email;
        }

        if ($data->phone) {
            $credentials['phone'] = $data->phone;
        }

        if (Auth::once($credentials)) {

            /** @var User $user */
            $user = $request->user();

            $user->generateTwoFactorCode();

            $user->notify(new SendTwoFactorCode($data->type));

            Session::put('userId', $user->id);
            Session::put('loginType', $data->type->value);

            return back();
        }

        return back()->withErrors([
            'phone' => 'The provided credentials do not match our records.',
        ]);
    }

    /**
     * Logout from account.
     *
     * @param Request $request
     * @return RedirectResponse
     */
    public function signOut(Request $request): RedirectResponse
    {
        auth()->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }

    /**
     * Confirm login by two-factor verification code.
     *
     * @param Request $request
     * @return RedirectResponse
     */
    public function confirmCode(Request $request): RedirectResponse
    {
        $data = ConfirmCodeData::from($request);

        $userId = Session::get('userId');

        /** @var User $user */
        $user = User::query()->findOrFail((int) $userId);

        if ($data->code !== $user->two_factor_code) {
            return back()->withErrors([
                'code' => 'Неверный код подтверждения',
            ]);
        }

        if ($user->two_factor_expires_at < now()) {
            return back()->withErrors([
                'code' => 'Код подтверждения истек',
            ]);
        }

        $user->resetTwoFactorCode();

        Auth::login($user);

        $request->session()->regenerate();

        Session::forget('userId');
        Session::forget('loginType');

        return redirect()->intended();
    }

    /**
     * Resend new two-factor verification code for login.
     *
     * @return RedirectResponse
     */
    public function resendCode(): RedirectResponse
    {
        $userId = Session::get('userId');
        $loginType = Session::get('loginType');

        /** @var User $user */
        $user = User::query()->findOrFail((int) $userId);

        $user->generateTwoFactorCode();

        $user->notify(new SendTwoFactorCode(LoginType::from($loginType)));

        return back();
    }
}
