<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(ShopSeeder::class);

        $this->call(BrandSeeder::class);

        $this->call(PromotionSeeder::class);

        $this->call(CategorySeeder::class);

        $this->call(ProductPropertySeeder::class);

        $this->call(ClientCardSeeder::class);
    }
}
