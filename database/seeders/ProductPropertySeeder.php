<?php

namespace Database\Seeders;

use App\Data\Csv\ProductPropertyData;
use App\Models\Product;
use App\Models\Property;
use App\Models\PropertyGroup;
use App\Models\PropertyValue;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;
use League\Csv\Exception;
use League\Csv\Reader;

class ProductPropertySeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Run the database seeds.
     * @throws Exception
     */
    public function run(): void
    {
        $propertiesCsvFilepath = Storage::disk('local')
            ->path('data/properties.csv');

        $reader = Reader::createFromPath($propertiesCsvFilepath);
        $reader->setHeaderOffset(0);

        $chunks = $reader->chunkBy(1000);

        $properties = [];


        $commonProps = [
            'Страна производства' => PropertyGroup::query()->create(['name' => 'Страна']),
            'Вес' => PropertyGroup::query()->create(['name' => 'Вес'])
        ];

        foreach ($chunks as $chunk) {
            $records = $chunk->getRecordsAsObject(ProductPropertyData::class);

            /** @var ProductPropertyData $record */
            foreach ($records as $record) {
                /** @var Product $product */
                $product = Product::query()
                    ->where('code', $record->product)
                    ->first();

                $existKey = "$record->group-$record->product-$record->name-$record->value";
                if (! $product || isset($properties[$existKey])) continue;

                $groupId = null;
                if ($record->group) {
                    $group = PropertyGroup::query()
                        ->where('name', $record->group)
                        ->first();
                    if (! $group) {
                        $group = PropertyGroup::query()->create([
                            'name' => $record->group,
                        ]);
                    }
                    $groupId = $group->id;
                }

                $property = Property::query()
                    ->where('name', $record->name)
                    ->first();

                if (! $property) {
                    $property = Property::query()->create([
                        'name' => $record->name,
                        'group_id' => in_array($record->name, array_keys($commonProps))
                            ? ($commonProps[$record->name])->id
                            : $groupId,
                    ]);
                }

                $propertyValue = PropertyValue::query()->create([
                    'property_id' => $property->id,
                    'value' => $record->value,
                    'order' => (int) $record->position,
                ]);

                $product->propertyValues()->attach($propertyValue->id);

                $properties[$existKey] = true;

                dump("Property '$record->name' with value '$record->value' was added.");
            }
        }
    }
}
