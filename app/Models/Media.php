<?php

namespace App\Models;

use Spatie\MediaLibrary\MediaCollections\Models\Media as BaseMedia;

class Media extends BaseMedia
{
    public const BRANDS_COLLECTION = 'brands';
    public const CATEGORIES_COLLECTION = 'categories';
    public const PRODUCTS_COLLECTION = 'products';
    public const PROMOTIONS_COLLECTION = 'promotions';
    public const PROMOTION_BANNERS_COLLECTION = 'promotion_banners';
}
