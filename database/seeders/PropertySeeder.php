<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Property;
use App\Models\PropertyValue;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PropertySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $category = Category::query()
            ->where('name', 'Стиральные машины')
            ->first();

        $properties = [
            [
                'name' => 'Мощность',
                'group_id' => null,
                'property_values' => [
                    [
                        'value' => '840 Вт',
                    ],
                    [
                        'value' => '845 Вт'
                    ],
                    [
                        'value' => '900 Вт'
                    ],
                    [
                        'value' => '1050 Вт'
                    ],
                    [
                        'value' => '1060 Вт'
                    ],
                    [
                        'value' => '1550 Вт'
                    ],
                    [
                        'value' => '1700 Вт'
                    ],
                    [
                        'value' => '1750 Вт'
                    ],
                    [
                        'value' => '1800 Вт'
                    ],
                    [
                        'value' => '1850 Вт'
                    ],
                    [
                        'value' => '1950 Вт'
                    ],
                    [
                        'value' => '2000 Вт'
                    ],
                    [
                        'value' => '2200 Вт'
                    ],
                ]
            ],
            [
                'name' => 'Загрузка белья/Расход воды',
                'group_id' => null,
                'property_values' => [
                    [
                        'value' => '4 кг/32 л'
                    ],
                    [
                        'value' => '4 кг/38 л'
                    ],
                    [
                        'value' => '4 кг/39 л'
                    ],
                    [
                        'value' => '5 кг/39 л'
                    ],
                    [
                        'value' => '5 кг/40 л'
                    ],
                    [
                        'value' => '5 кг/45 л'
                    ],
                    [
                        'value' => '5 кг/47 л'
                    ],
                    [
                        'value' => '5 кг/48 л'
                    ],
                    [
                        'value' => '5 кг/49 л'
                    ],
                    [
                        'value' => '5 кг/52 л'
                    ],
                    [
                        'value' => '5 кг/55 л'
                    ],
                    [
                        'value' => '5.5 кг/56 л'
                    ],
                    [
                        'value' => '6 кг/36 л'
                    ],
                    [
                        'value' => '6 кг/38 л'
                    ],
                    [
                        'value' => '6 кг/41 л'
                    ],
                    [
                        'value' => '6 кг/42 л'
                    ],
                    [
                        'value' => '6 кг/43 л'
                    ],
                    [
                        'value' => '6 кг/48 л'
                    ],
                    [
                        'value' => '6 кг/52 л'
                    ],
                    [
                        'value' => '6.5 кг/39 л'
                    ],
                    [
                        'value' => '6.5 кг/56 л'
                    ],
                    [
                        'value' => '7 кг/40 л'
                    ],
                    [
                        'value' => '7 кг/42 л'
                    ],
                    [
                        'value' => '7 кг/45 л'
                    ],
                    [
                        'value' => '7 кг/46 л'
                    ],
                    [
                        'value' => '7 кг/49 л'
                    ],
                    [
                        'value' => '7 кг/50 л'
                    ],
                    [
                        'value' => '7 кг/52 л'
                    ],
                    [
                        'value' => '7 кг/56 л'
                    ],
                    [
                        'value' => '8 кг/45 л'
                    ],
                    [
                        'value' => '8 кг/58 л'
                    ],
                    [
                        'value' => '10 кг/54 л'
                    ],
                    [
                        'value' => '10 кг/160 л'
                    ],
                ]
            ],
            [
                'name' => 'Количество программ',
                'group_id' => null,
                'property_values' => [
                    [
                        'value' => '10 программ'
                    ],
                    [
                        'value' => '12 программ'
                    ],
                    [
                        'value' => '13 программ'
                    ],
                    [
                        'value' => '14 программ'
                    ],
                    [
                        'value' => '15 программ'
                    ],
                    [
                        'value' => '16 программ'
                    ],
                    [
                        'value' => '23 программ'
                    ],
                ]
            ],
            [
                'name' => 'Тип управления',
                'group_id' => null,
                'property_values' => [
                    [
                        'value' => 'кнопки,поворотный механизм'
                    ],
                    [
                        'value' => 'кнопки,поворотный механизм,дисплей'
                    ],
                    [
                        'value' => 'кнопки,поворотный механизм,дисплей,таймер'
                    ],
                    [
                        'value' => 'поворотный механизм'
                    ],
                    [
                        'value' => 'сенсор,поворотный механизм'
                    ],
                    [
                        'value' => 'сенсор,поворотный механизм,дисплей'
                    ],
                    [
                        'value' => 'сенсор,поворотный механизм,дисплей,таймер'
                    ],
                ]
            ],
            [
                'name' => 'Габариты ШxВxГ',
                'group_id' => null,
                'property_values' => [
                    [
                        'value' => '59.5x84.3x37.8'
                    ],
                    [
                        'value' => '59.5x84.5x43.5'
                    ],
                    [
                        'value' => '59.5x85x30'
                    ],
                    [
                        'value' => '59.5x85x33'
                    ],
                    [
                        'value' => '59.5x85x34.8'
                    ],
                    [
                        'value' => '59.5x85x39'
                    ],
                    [
                        'value' => '59.5x85x40'
                    ],
                    [
                        'value' => '59.5x85x41'
                    ],
                    [
                        'value' => '59.5x85x42.5'
                    ],
                    [
                        'value' => '59.5x85x43.5'
                    ],
                    [
                        'value' => '59.5x85x46'
                    ],
                    [
                        'value' => '59.5x85x47'
                    ],
                    [
                        'value' => '59.5x85x48.5'
                    ],
                    [
                        'value' => '59.5x85x49.5'
                    ],
                    [
                        'value' => '59.5x85x60'
                    ],
                    [
                        'value' => '59.7x84.5x52.7'
                    ],
                    [
                        'value' => '59.7x84.5x55.7'
                    ],
                    [
                        'value' => '59.7x84.5x58.2'
                    ],
                    [
                        'value' => '59.7x85x43.5'
                    ],
                    [
                        'value' => '59.8x84.8x59'
                    ],
                    [
                        'value' => '59.8x84.8x63.5'
                    ],
                    [
                        'value' => '60x84x36.5'
                    ],
                    [
                        'value' => '60x84x41.5'
                    ],
                    [
                        'value' => '60x84x45'
                    ],
                    [
                        'value' => '60x85x37.8'
                    ],
                    [
                        'value' => '60x85x40'
                    ],
                    [
                        'value' => '60x85x43'
                    ],
                    [
                        'value' => '60x85x43.2'
                    ],
                    [
                        'value' => '60x85x44'
                    ],
                    [
                        'value' => '60x85x44.5'
                    ],
                    [
                        'value' => '60x85x45'
                    ],
                    [
                        'value' => '60x85x47'
                    ],
                    [
                        'value' => '60x85x57'
                    ],
                    [
                        'value' => '61.1х88.1х41.2'
                    ],
                    [
                        'value' => '64.5х88.5х38.3'
                    ],
                    [
                        'value' => '64.5х88.5х53'
                    ],
                    [
                        'value' => '64.5х88.8х48'
                    ],
                    [
                        'value' => '65х88х50.5'
                    ],
                ]
            ],
            [
                'name' => 'Управление со смартфона',
                'group_id' => null,
                'property_values' => [
                    [
                        'value' => 'NFC (Candy simply-Fi)'
                    ],
                    [
                        'value' => 'NFC (LG ThinQ)'
                    ],
                    [
                        'value' => 'Wi-Fi (HomeWhiz)'
                    ],
                    [
                        'value' => 'Wi-Fi (simply-Fi)'
                    ],
                ]
            ],
            [
                'name' => 'Цвет',
                'group_id' => null,
                'property_values' => [
                    [
                        'value' => 'белый'
                    ],
                    [
                        'value' => 'белый/серебристый'
                    ],
                    [
                        'value' => 'белый/серый'
                    ],
                    [
                        'value' => 'белый/черный'
                    ],
                    [
                        'value' => 'серебристый'
                    ],
                    [
                        'value' => 'серебристый/черный'
                    ],
                    [
                        'value' => 'черный'
                    ],
                ]
            ]
        ];

        foreach ($properties as $property) {
            $property = array_merge($property, [
                'category_id' => $category->id,
            ]);

            $propertyId = Property::query()->create($property)->id;

            foreach ($property['property_values'] as $property_value) {
                $property_value = array_merge($property_value, [
                    'property_id' => $propertyId,
                ]);
                PropertyValue::query()->create($property_value);
            }
        }
    }
}
