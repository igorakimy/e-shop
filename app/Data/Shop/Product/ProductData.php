<?php

namespace App\Data\Shop\Product;

use App\Data\Shop\Brand\BrandData;
use App\Data\Shop\Category\CategoryData;
use App\Data\Shop\Promotion\PromotionData;
use App\Data\Shop\Url\UrlData;
use App\Enums\ProductAvailability;
use App\Models\Product;
use App\Models\Promotion;
use App\Models\Url;
use Illuminate\Support\Carbon;
use Spatie\LaravelData\Attributes\WithCast;
use Spatie\LaravelData\Casts\DateTimeInterfaceCast;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\Lazy;

class ProductData extends Data
{
    public function __construct(
        public ?int $id,
        public string $uuid,
        public string $name,
        public string $slug,
        public string $code,
        public int $price,
        public ProductAvailability $in_stock,
        public ?string $delivery,
        public ?string $description,
        public int $discount,
        public ?string $warranty,
        public bool $is_new,

        #[WithCast(DateTimeInterfaceCast::class, format: "Y-m-d H:i:s")]
        public ?Carbon $expected_at,

        public bool $is_hit,
        public bool $is_best_price,
        public bool $is_markdown,
        public ?string $markdown_reason,
        public ?string $short_props,
        public BrandData|Lazy $brand,
        public CategoryData|Lazy $category,
        public Url|Lazy $url,
        public Promotion|Lazy|null $promotion,
        public array $card_thumbs,
        public int $cashback,
    ) {
    }

    public static function fromModel(Product $product): self
    {
        return new self(
            $product->id,
            $product->uuid,
            $product->name,
            $product->slug,
            $product->code,
            $product->price,
            $product->in_stock,
            $product->delivery,
            $product->description,
            $product->discount,
            $product->warranty,
            $product->is_new,
            $product->expected_at ? Carbon::parse($product->expected_at) : null,
            $product->is_hit,
            $product->is_best_price,
            $product->is_markdown,
            $product->markdown_reason,
            $product->short_props,
            Lazy::create(fn() => BrandData::from($product->brand)),
            Lazy::create(fn() => CategoryData::from($product->category)),
            Lazy::create(fn() => UrlData::from($product->url)),
            $product->promotion ? Lazy::create(fn() => PromotionData::from($product->promotion)) : null,
            $product->card_thumbs,
            $product->cashback,
        );
    }
}
