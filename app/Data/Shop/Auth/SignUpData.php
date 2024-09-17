<?php

namespace App\Data\Shop\Auth;

use Spatie\LaravelData\Attributes\Validation\Email;
use Spatie\LaravelData\Data;

class SignUpData extends Data
{
    public function __construct(
        public string $nickname,
        public ?string $full_name,
        #[Email]
        public string $email,
        public string $phone,
        public bool $privacy_policy,
    ) {
    }
}
