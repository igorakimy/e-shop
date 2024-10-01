<?php

namespace App\Actions\Shop\Url;

use App\Data\Shop\Url\UrlData;
use App\Models\Url;

class GetUrlByAddress
{
    public function handle(string $address): UrlData
    {
        $url = Url::query()
            ->with(['model'])
            ->where('address', $address)
            ->firstOrFail();

        return UrlData::from($url);
    }
}
