<?php

namespace Database\Seeders;

use App\Data\Seeding\BrandData;
use App\Models\Brand;
use App\Models\Media;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;
use League\Csv\Exception;
use League\Csv\Reader;
use League\Csv\UnavailableStream;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileDoesNotExist;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileIsTooBig;

class BrandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     * @throws Exception
     * @throws UnavailableStream
     * @throws FileDoesNotExist
     * @throws FileIsTooBig
     */
    public function run(): void
    {
        $brandsCsvFilepath = Storage::disk('local')->path('data/brands.csv');

        $reader = Reader::createFromPath($brandsCsvFilepath);
        $reader->setHeaderOffset(0);

        $records = $reader->getRecordsAsObject(BrandData::class);

        /** @var BrandData $record */
        foreach ($records as $record) {

            $vendorUrl = $record->vendor_url === '#NULL!' ? null : $record->vendor_url;

            /** @var Brand $brand */
            $brand = Brand::query()->updateOrCreate([
                'slug' => $record->slug
            ], [
                'name' => $record->name,
                'vendor_url' => $vendorUrl,
                'description' => $record->description,
            ]);

            $brandImage = $brand->getFirstMedia(Media::BRANDS_COLLECTION);

            if (! $brandImage && $record->image) {

                $imgPath = Storage::disk('local')
                    ->path("data/$record->image");

                $brand->addMedia($imgPath)
                    ->preservingOriginal()
                    ->toMediaCollection(Media::BRANDS_COLLECTION);
            }
        }
    }
}
