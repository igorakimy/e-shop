<?php

namespace Database\Seeders;

use App\Models\Promotion;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;

class PromotionSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $promotions = [
            [
                'name' => 'Обновись к учёбе',
                'started_at' => Carbon::createFromFormat('Y-m-d H:i:s', '2024-08-22 00:00:00'),
                'ended_at' => Carbon::createFromFormat('Y-m-d H:i:s', '2024-09-22 00:00:00'),
            ]
        ];

        foreach ($promotions as $promotion) {
            Promotion::query()->create($promotion);
        }
    }
}
