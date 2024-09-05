<?php

namespace Database\Seeders;

use App\Data\Seeding\CategoryData;
use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use League\Csv\Exception;
use League\Csv\Reader;
use League\Csv\UnavailableStream;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     * @throws UnavailableStream
     * @throws Exception
     */
    public function run(): void
    {
        $icons = [
            'Бытовая техника' => 'teapot',
            'Телефония и аксессуары' => 'phone',
            'Планшеты и аксессуары' => 'tablet',
            'Ноутбуки и аксессуары' => 'laptop',
            'Компьютеры и комплектующие' => 'processor',
            'Компьютерная периферия' => 'keyboard',
            'Носители информации' => 'usb-flash',
            'Аудиотехника' => 'headphones',
            'Оргтехника и расходные материалы' => 'printer',
            'Электрическое оборудование' => 'electrical-panel',
            'Элементы питания' => 'battery',
            'Сетевое оборудование' => 'router',
            'Соединительное оборудование' => 'usb-cable',
            'Телевизоры и аксессуары' => 'monitor',
            'Фото-видео и аксессуары' => 'camera',
            'Автотовары и спорт' => 'dvr',
            'Видеонаблюдение и системы контроля' => 'cctv-camera',
            'Инструменты и запчасти' => 'tools',
        ];

        $categoriesCsvFilepath = Storage::disk('local')->path('data/categories.csv');

        $reader = Reader::createFromPath($categoriesCsvFilepath);
        $reader->setHeaderOffset(0);

        $records = $reader->getRecordsAsObject(CategoryData::class);

        $categorySlugs = [];

        /** @var CategoryData $record */
        foreach ($records as $record) {

            $data = [
                'name' => $record->name,
                'slug' => $record->slug,
                'icon' => $icons[$record->name] ?? null,
                'parent_id' => null,
            ];

            if ($record->parent) {

                $parentCategoryId = $categorySlugs[$record->parent] ?? null;

                if (! $parentCategoryId) {
                    return;
                }

                $data['parent_id'] = $parentCategoryId;
            }

            $category = Category::query()
                ->where('slug', $record->slug)
                ->first() ?: new Category();

            $category->fill($data);
            $category->save();

            $categorySlugs[$record->slug] = $category->id;
        }

        $allCategories = Category::query()->get();

        foreach ($allCategories as $category) {
            $newSlug = Str::slug(Str::transliterate($category->name));
            $category->slug = $newSlug;
            $category->save();
        }
    }
}
