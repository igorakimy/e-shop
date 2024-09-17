<?php

namespace App\Enums;

enum LoginType: string
{
    case Phone = 'phone';
    case Email = 'email';
}
