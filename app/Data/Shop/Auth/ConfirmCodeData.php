<?php

namespace App\Data\Shop\Auth;

use Spatie\LaravelData\Data;

class ConfirmCodeData extends Data
{
    public function __construct(
        public int $code
    ) {
    }
}
