<?php

namespace Database\Seeders;

use App\Models\Media;
use App\Models\Promotion;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileDoesNotExist;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileIsTooBig;

class PromotionSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Run the database seeds.
     *
     * @return void
     * @throws FileDoesNotExist
     * @throws FileIsTooBig
     */
    public function run(): void
    {
        $promotions = [
            [
                'name' => 'Обновись к учёбе',
                'image' => 'data/images/promotions/update_to_study/preview.png',
                'banner' => 'data/images/promotions/update_to_study/banner.png',
                'started_at' => Carbon::createFromFormat('Y-m-d H:i:s', '2024-08-22 00:00:00'),
                'ended_at' => Carbon::createFromFormat('Y-m-d H:i:s', '2024-09-22 00:00:00'),
            ]
        ];

        foreach ($promotions as $promotion) {
            $promo = Promotion::query()->updateOrCreate(
                ['name' => $promotion['name']],
                [
                    'started_at' => $promotion['started_at'],
                    'ended_at' => $promotion['ended_at'],
                ]
            );

            // preview image
            $promo->clearMediaCollection(Media::PROMOTIONS_COLLECTION);

            $promoImgPath = Storage::disk('local')
                ->path($promotion['image']);

            $promo->addMedia($promoImgPath)
                ->preservingOriginal()
                ->usingName(Str::slug(Str::transliterate($promotion['name']), '_'))
                ->toMediaCollection(Media::PROMOTIONS_COLLECTION);

            // banner image
            $promo->clearMediaCollection(Media::PROMOTION_BANNERS_COLLECTION);

            $bannerImgPath = Storage::disk('local')
                ->path($promotion['banner']);

            $promo->addMedia($bannerImgPath)
                ->preservingOriginal()
                ->usingName(Str::slug(Str::transliterate($promotion['name']), '_'))
                ->toMediaCollection(Media::PROMOTION_BANNERS_COLLECTION);
        }
    }
}
