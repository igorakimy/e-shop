<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            [
                'name' => 'Бытовая техника',
                'children' => [
                    [
                        'name' => 'Крупная бытовая техника',
                        'children' => [
                            [
                                'name' => 'Отдельностоящая техника',
                                'children' => [
                                    [
                                        'name' => 'Плиты',
                                        'children' => []
                                    ],
                                    [
                                        'name' => 'Вытяжки',
                                        'children' => []
                                    ],
                                    [
                                        'name' => 'Посудомоечные машины',
                                        'children' => []
                                    ],
                                    [
                                        'name' => 'Холодильники',
                                        'children' => []
                                    ],
                                    [
                                        'name' => 'Морозильные камеры',
                                        'children' => []
                                    ],
                                    [
                                        'name' => 'Стиральные машины',
                                        'children' => []
                                    ],
                                ]
                            ],
                            [
                                'name' => 'Встраиваемая техника',
                                'children' => [
                                    [
                                        'name' => 'Варочные поверхности',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Вытяжки встраиваемые',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Духовые шкафы',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Микроволновые печи встраиваемые',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Холодильники встраиваемые',
                                        'children' => [],
                                    ],
                                ],
                            ],
                        ]
                    ],
                    [
                        'name' => 'Техника для красоты и здоровья',
                        'children' => [
                            [
                                'name' => 'Укладка и сушка волос',
                                'children' => [
                                    [
                                        'name' => 'Фены',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Фен-щетки',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Выпрямители для волос',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Мультистайлеры',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Щипцы',
                                        'children' => [],
                                    ],
                                ],
                            ],
                            [
                                'name' => 'Бритье и стрижка',
                                'children' => [
                                    [
                                        'name' => 'Машинки для стрижки',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Триммеры',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Электробритвы',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Эпиляторы',
                                        'children' => [],
                                    ],
                                ],
                            ],
                            [
                                'name' => 'Товары для здоровья',
                                'children' => [
                                    [
                                        'name' => 'Весы напольные',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Зубные щетки',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Аксессуары к зубным щеткам',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Товары для ванной',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Инфракрасные термометры',
                                        'children' => [],
                                    ],
                                ],
                            ],
                        ],
                    ],
                    [
                        'name' => 'Техника для дома',
                        'children' => [
                            [
                                'name' => 'Уборка дома',
                                'children' => [
                                    [
                                        'name' => 'Роботы-пылесосы',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Вертикальные пылесосы',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Пылесосы',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Пароочистители',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Стеклоочистители',
                                        'children' => [],
                                    ],
                                ],
                            ],
                            [
                                'name' => 'Уход за одеждой',
                                'children' => [
                                    [
                                        'name' => 'Утюги',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Парогенераторы',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Отпариватели',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Машинки для удаления катышков',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Стиральные машины',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Швейные машины',
                                        'children' => [],
                                    ],
                                ],
                            ],
                            [
                                'name' => 'Климатическая техника',
                                'children' => [
                                    [
                                        'name' => 'Увлажнители воздуха',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Очистители воздуха',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Кондиционеры',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Вентиляторы',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Тепловентиляторы',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Конвекторы',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Масляные обогреватели',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Водонагреватели',
                                        'children' => [],
                                    ],
                                ],
                            ],
                            [
                                'name' => 'Освещение для дома',
                                'children' => [
                                    [
                                        'name' => 'Лампы светодиодные',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Умное освещение',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Прожекторы',
                                        'children' => [],
                                    ],
                                ],
                            ],
                            [
                                'name' => 'Умный дом',
                                'children' => [
                                    [
                                        'name' => 'Умные колонки',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Умное освещение',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Умные розетки и таймеры',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Аксессуары для умного дома',
                                        'children' => [],
                                    ],
                                ],
                            ],
                        ],
                    ],
                    [
                        'name' => 'Техника для кухни',
                        'children' => [
                            [
                                'name' => 'Приготовление пищи',
                                'children' => [
                                    [
                                        'name' => 'Микроволновые печи',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Мини-печи',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Настольные плиты',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Мультиварки',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Пароварки',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Хлебопечки',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Фритюрницы',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Шашлычницы',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Аэрогрили',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Электрогрили',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Тостеры',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Йогуртницы',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Сушилки для овощей и фруктов',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Плиты',
                                        'children' => [],
                                    ],
                                ],
                            ],
                            [
                                'name' => 'Измельчение и смешивание',
                                'children' => [
                                    [
                                        'name' => 'Блендеры',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Измельчители',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Кухонные комбайны',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Миксеры',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Мясорубки',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Ломтерезки',
                                        'children' => [],
                                    ],
                                ],
                            ],
                            [
                                'name' => 'Приготовление напитков',
                                'children' => [
                                    [
                                        'name' => 'Электрочайники',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Термопоты',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Кофеварки',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Кофемашины',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Кофемолки',
                                        'children' => [],
                                    ],
                                    [
                                        'name' => 'Соковыжималки',
                                        'children' => [],
                                    ],
                                ],
                            ],
                            [
                                'name' => 'Взвешивание',
                                'children' => [
                                    [
                                        'name' => 'Весы кухонные',
                                        'children' => [],
                                    ],
                                ],
                            ],
                            [
                                'name' => 'Холодильники',
                                'children' => [],
                            ],
                        ],
                    ],
                    [
                        'name' => 'Посуда',
                        'children' => [],
                    ],
                ],
            ],
            [
                'name' => 'Телефония и аксессуары',
                'children' => [
                    [
                        'name' => 'Смартфоны',
                        'children' => [],
                    ],
                    [
                        'name' => 'Смарт-часы и браслеты',
                        'children' => [],
                    ],
                    [
                        'name' => 'Мобильные телефоны',
                        'children' => [],
                    ],
                    [
                        'name' => 'Чехлы для смартфонов',
                        'children' => [],
                    ],
                    [
                        'name' => 'Защитные пленки и стекла для смартфонов',
                        'children' => [],
                    ],
                    [
                        'name' => 'Аксессуары для смартфонов',
                        'children' => [],
                    ],
                    [
                        'name' => 'Аксессуары для смарт-часов и браслетов',
                        'children' => [],
                    ],
                    [
                        'name' => 'Карты пополнения счета',
                        'children' => [],
                    ],
                    [
                        'name' => 'Офисная телефония и радиостанции',
                        'children' => [],
                    ],
                    [
                        'name' => 'Чистящие средства',
                        'children' => [],
                    ],
                    [
                        'name' => 'Наушники вставные',
                        'children' => [],
                    ],
                    [
                        'name' => 'Наушники накладные',
                        'children' => [],
                    ],
                    [
                        'name' => 'Маршрутизаторы',
                        'children' => [],
                    ],
                    [
                        'name' => 'Кабели USB и переходники',
                        'children' => [],
                    ],
                    [
                        'name' => 'Карты памяти microSD',
                        'children' => [],
                    ],
                ],
            ],
            [
                'name' => 'Планшеты и аксессуары',
                'children' => [],
            ],
            [
                'name' => 'Ноутбуки и аксессуары',
                'children' => [],
            ],
            [
                'name' => 'Компьютеры и комплектующие',
                'children' => [],
            ],
            [
                'name' => 'Компьютерная периферия',
                'children' => [],
            ],
            [
                'name' => 'Носители информации',
                'children' => [],
            ],
            [
                'name' => 'Аудиотехника',
                'children' => [],
            ],
            [
                'name' => 'Оргтехника и расходные материалы',
                'children' => [],
            ],
            [
                'name' => 'Электрическое оборудование',
                'children' => [],
            ],
            [
                'name' => 'Элементы питания',
                'children' => [],
            ],
            [
                'name' => 'Сетевое оборудование',
                'children' => [],
            ],
            [
                'name' => 'Соединительное оборудование',
                'children' => [],
            ],
            [
                'name' => 'Телевизоры и аксессуары',
                'children' => [],
            ],
            [
                'name' => 'Фото-видео и аксессуары',
                'children' => [],
            ],
            [
                'name' => 'Автотовары и спорт',
                'children' => [],
            ],
            [
                'name' => 'Видеонаблюдение и системы контроля',
                'children' => [],
            ],
            [
                'name' => 'Инструменты и запчасти',
                'children' => [],
            ],
        ];

        self::generateCategories($categories);
    }

    public static function generateCategories(array $categories, int $parent = null): void
    {
        Category::fixTree();

        foreach ($categories as $category) {
            $slug = Str::slug(Str::transliterate($category['name']));
            $exist = Category::query()
                ->where('slug', $slug)
                ->first(['id']);

            if (! $exist) {
                $exist = Category::query()->create([
                    'name' => $category['name'],
                    'slug' => $slug,
                    'parent_id' => $parent,
                ]);
            }

            if (! empty($category['children'])) {
                self::generateCategories($category['children'], $exist->id);
            }
        }
    }
}
