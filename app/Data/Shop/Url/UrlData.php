<?php

namespace App\Data\Shop\Url;

use App\Models\Url;
use Spatie\LaravelData\Data;

class UrlData extends Data
{
    public function __construct(
        public string $address,
        public object $model,
    ) {
    }

    public static function fromModel(Url $url): self
    {
        return new self(
            address: $url->address,
            model: $url->model
        );
    }
}
