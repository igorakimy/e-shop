<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class TwoFactorMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param Closure(Request): (Response) $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        /** @var User|null $user */
        $user = auth()->user();

        if (auth()->check() && $user->two_factor_code) {

            if ($user->two_factor_expires_at < now()) {
                $user->resetTwoFactorCode();
                auth()->logout();
                return redirect()->route('registration')->withErrors([
                    'expired' => 'Срок действия вашего кода подтверждения истек. Пожалуйста, повторно войдите в систему'
                ]);
            }

            if (! $request->is('confirm_code')) {
                return back()->with([
                    'verified' => false
                ]);
            }
        }

        return $next($request);
    }
}
