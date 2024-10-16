<?php

namespace Database\Seeders;

use App\Models\Media;
use App\Models\Shop;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileDoesNotExist;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileIsTooBig;
use Storage;

class ShopSeeder extends Seeder
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
        $shopsList = [
            [
                'address' => 'г. Донецк, ул. Первомайская, 51 ТЦ «Континент» 1 этаж',
                'phones' => '+7 (949) 303 06 60',
                'start_day' => 1,
                'end_day' => 7,
                'open_time' => '09:00',
                'close_time' => '18:00',
                'latitude' => 47.990716,
                'longitude' => 37.799585,
            ],
            [
                'address' => 'г. Донецк, ул. Артема 130 (ТРЦ "Донецк Сити")',
                'phones' => '+7 (949) 308 03 03',
                'start_day' => 1,
                'end_day' => 7,
                'open_time' => '10:00',
                'close_time' => '18:00',
                'latitude' => 48.030781,
                'longitude' => 37.787668,
            ],
            [
                'address' => 'г. Донецк, ул. Горького, 151А (рядом с пл.Ленина)',
                'phones' => '+7 (949) 306 11 44',
                'start_day' => 1,
                'end_day' => 7,
                'open_time' => '09:00',
                'close_time' => '17:00',
                'latitude' => 48.003327,
                'longitude' => 37.807261,
            ],
            [
                'address' => 'г. Донецк, ул. 230-й Стрелковой дивизии, 9А (мкрн Донской)',
                'phones' => '+7 (949) 308 77 11,+7 (949) 308 77 44',
                'start_day' => 1,
                'end_day' => 7,
                'open_time' => '09:00',
                'close_time' => '18:00',
                'latitude' => 47.990815,
                'longitude' => 37.910360,
            ],
            [
                'address' => 'г. Донецк, ул. Терешковой 1Д (мкрн. Текстильщик)',
                'phones' => '+7 (949) 460 71 66',
                'start_day' => 1,
                'end_day' => 7,
                'open_time' => '08:30',
                'close_time' => '18:00',
                'latitude' => 47.951328,
                'longitude' => 37.696974,
            ],
            [
                'address' => 'г. Макеевка, ул. Московская 60а, (рядом с рынком Красный)',
                'phones' => '+7 (949) 310 32 32',
                'start_day' => 1,
                'end_day' => 7,
                'open_time' => '09:00',
                'close_time' => '18:00',
                'latitude' => 48.042697,
                'longitude' => 37.972416,
            ],
            [
                'address' => 'г. Горловка, пр-т Победы, 30 (площадь Победы)',
                'phones' => '+7 (949) 306 15 15',
                'start_day' => 1,
                'end_day' => 7,
                'open_time' => '09:00',
                'close_time' => '17:00',
                'latitude' => 48.301662,
                'longitude' => 38.01742,
            ],
            [
                'address' => 'г. Снежное, ул.Крестьянская, 43 (ТЦ"Шахтер")',
                'phones' => '+7 (949) 308 66 77',
                'start_day' => 1,
                'end_day' => 7,
                'open_time' => '08:00',
                'close_time' => '17:00',
                'latitude' => 48.022562,
                'longitude' => 38.762937,
            ],
            [
                'address' => 'г. Енакиево, пр-т Ленина, 96 (площадь Ленина)',
                'phones' => '+7 (949) 308 99 11',
                'start_day' => 1,
                'end_day' => 7,
                'open_time' => '09:00',
                'close_time' => '17:00',
                'latitude' => 48.220714,
                'longitude' => 38.208481,
            ],
        ];

        foreach ($shopsList as $index => $shopAttributes) {
            /** @var Shop $shop */
            $shop = Shop::query()->create($shopAttributes);

            $imgNum = $index+1;
            $shopMapImage = Storage::disk('local')
                ->path("data/images/shops/shop-map-$imgNum.jpg");

            $shop->addMedia($shopMapImage)
                ->preservingOriginal()
                ->setName("shop-map-$imgNum")
                ->toMediaCollection(Media::SHOP_MAPS_COLLECTION);
        }
    }
}
