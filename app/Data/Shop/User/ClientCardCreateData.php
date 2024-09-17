<?php

namespace App\Data\Shop\User;

use Illuminate\Support\Carbon;
use Spatie\LaravelData\Attributes\WithCast;
use Spatie\LaravelData\Casts\DateTimeInterfaceCast;
use Spatie\LaravelData\Data;

class ClientCardCreateData extends Data
{
    public function __construct(
        public string $full_name,
        public int $phone,
        public string $city,

        #[WithCast(DateTimeInterfaceCast::class, format: 'd.m.Y')]
        public Carbon $birthday_date,

        public string $heard_source,
        public int $number,
    ) {
    }
}
