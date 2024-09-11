<?php

namespace App\Data\Shop\Promotion;

use Carbon\CarbonImmutable;
use Spatie\LaravelData\Attributes\WithCast;
use Spatie\LaravelData\Casts\DateTimeInterfaceCast;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\Optional;

class PromotionData extends Data
{
    public function __construct(
        public Optional|int $id,
        public string $name,

        #[WithCast(DateTimeInterfaceCast::class, format: "Y-m-d H:i:s")]
        public ?CarbonImmutable $started_at,

        #[WithCast(DateTimeInterfaceCast::class, format: "Y-m-d H:i:s")]
        public ?CarbonImmutable $ended_at,
    ) {
    }
}
