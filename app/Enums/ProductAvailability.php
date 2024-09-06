<?php

namespace App\Enums;

enum ProductAvailability: string
{
    case InStock = 'В наличии';
    case NotAvailable = 'Нет в наличии';
    case Check = 'Уточняйте';
}
