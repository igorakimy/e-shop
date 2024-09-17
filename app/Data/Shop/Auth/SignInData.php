<?php

namespace App\Data\Shop\Auth;

use App\Enums\LoginType;
use Spatie\LaravelData\Attributes\Validation\RequiredIf;
use Spatie\LaravelData\Attributes\Validation\RequiredWithout;
use Spatie\LaravelData\Attributes\WithCast;
use Spatie\LaravelData\Casts\EnumCast;
use Spatie\LaravelData\Data;

class SignInData extends Data
{
    public function __construct(
        #[WithCast(EnumCast::class)]
        public LoginType $type,

        #[RequiredWithout('phone'), RequiredIf('phone', '7')]
        public ?string $email,

        #[RequiredWithout('email')]
        public ?string $phone,
    ) {
    }
}
