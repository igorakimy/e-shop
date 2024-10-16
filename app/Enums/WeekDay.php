<?php

namespace App\Enums;

enum WeekDay: int
{
    case Monday    = 1;
    case Tuesday   = 2;
    case Wednesday = 3;
    case Thursday  = 4;
    case Friday    = 5;
    case Saturday  = 6;
    case Sunday    = 7;

    /**
     * Get short name of week day.
     *
     * @return string
     */
    public function shortName(): string
    {
        return match ($this) {
            self::Monday    => 'Пн',
            self::Tuesday   => 'Вт',
            self::Wednesday => 'Ср',
            self::Thursday  => 'Чт',
            self::Friday    => 'Пт',
            self::Saturday  => 'Сб',
            self::Sunday    => 'Вс',
        };
    }
}
