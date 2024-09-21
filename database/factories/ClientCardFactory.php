<?php

namespace Database\Factories;

use App\Models\ClientCard;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<ClientCard>
 */
class ClientCardFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'number' => rand(1000000000000, 9999999999999),
            'bounces_amount' => 0,
            'barcode' => null,
            'client_id' => null,
        ];
    }
}
