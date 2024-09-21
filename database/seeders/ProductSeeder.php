<?php

namespace Database\Seeders;

use App\Data\Csv\ProductData;
use App\Enums\ProductAvailability;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Media;
use App\Models\Product;
use App\Models\Promotion;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use League\Csv\Exception;
use League\Csv\InvalidArgument;
use League\Csv\Reader;
use League\Csv\UnavailableStream;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileDoesNotExist;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileIsTooBig;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     * @throws Exception
     * @throws UnavailableStream
     * @throws InvalidArgument
     * @throws FileDoesNotExist
     * @throws FileIsTooBig
     */
    public function run(): void
    {
        $productsCsvFilepath = Storage::disk('local')
            ->path('data/products.csv');

        $reader = Reader::createFromPath($productsCsvFilepath);
        $reader->setHeaderOffset(0);
        $chunks = $reader->chunkBy(1000);

        $chunkNumber = 1;
        foreach ($chunks as $chunk) {

            $records = $chunk->getRecordsAsObject(ProductData::class);

            /** @var ProductData $record */
            foreach ($records as $record) {
                $existProduct = Product::query()
                    ->where('name', $record->name)
                    ->first();

                if ($existProduct) continue;

                $brand = Brand::query()
                    ->where('name', $record->brand)
                    ->first();

                $category = Category::query()
                    ->where('slug', $record->category)
                    ->first();

                if (! $brand || ! $category) continue;

                $promotionId = null;

                if ($record->promotion) {

                    $promotion = Promotion::query()
                        ->where('name', $record->promotion)
                        ->first();

                    $promotionId = $promotion->id;

                    if (! $promotion) continue;
                }

                $slug = 'p-' . Str::random(12)
                    . '-' . Str::slug(Str::transliterate($record->name));

                $product = new Product();
                $product->fill([
                    'uuid' => fake()->uuid(),
                    'name' => $record->name,
                    'slug' => $slug,
                    'code' => $record->code,
                    'price' => (int) $record->price,
                    'in_stock' => ProductAvailability::from(explode(':', $record->in_stock)[0]),
                    'delivery' => $record->delivery,
                    'description' => $record->description,
                    'discount' => (int) $record->discount,
                    'warranty' => $record->warranty,
                    'is_new' => $record->is_new,
                    'expected_at' => $record->expected_at
                        ? Carbon::createFromFormat('d.m.Y', trim($record->expected_at))
                        : null,
                    'is_hit' => $record->is_hit,
                    'is_best_price' => $record->is_best_price,
                    'is_markdown' => $record->is_markdown,
                    'markdown_reason' => $record->markdown_reason,
                    'short_props' => $record->short_props,
                    'category_id' => $category->id,
                    'brand_id' => $brand->id,
                    'promotion_id' => $promotionId,
                ]);
                $product->save();

                dump("Product '$product->name' was added.");

                // add photos
                $this->addPhotos($product, $record);
            }

            dump("Chunk $chunkNumber completed!");

            $chunkNumber++;
        }
    }

    /**
     * @throws FileIsTooBig
     * @throws FileDoesNotExist
     */
    private function addPhotos(Product $product, ProductData $record): void
    {
        $images = Storage::disk('local')
            ->files('data/images/products/' . $record->uuid);

        $existMedia = $product->getMedia(Media::PRODUCTS_COLLECTION);
        if ($existMedia->isNotEmpty()) {
            return;
        }

        $imageNumber = 1;
        foreach ($images as $image) {
            $imagePath = Storage::disk('local')->path($image);

            $product->addMedia($imagePath)
                ->preservingOriginal()
                ->setName("$product->uuid-$imageNumber")
                ->setOrder($imageNumber)
                ->toMediaCollection(Media::PRODUCTS_COLLECTION);

            $imageNumber++;
        }
    }
}
