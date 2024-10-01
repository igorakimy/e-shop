<?php

namespace App\Actions\Shop\Url;

use App\Data\Shop\Url\UrlWithModelData;
use App\Models\Url;

class GetUrlByAddress
{
    public function handle(string $address): UrlWithModelData
    {
        $url = Url::query()
            ->with(['model'])
            ->where('address', $address)
            ->firstOrFail();

        return UrlWithModelData::from($url);
    }
}
