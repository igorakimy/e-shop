<?php

namespace App\Models;

use Spatie\MediaLibrary\MediaCollections\Models\Media as BaseMedia;

class Media extends BaseMedia
{
    public const BRANDS_COLLECTION = 'brands';
    public const PRODUCTS_COLLECTION = 'products';
}
