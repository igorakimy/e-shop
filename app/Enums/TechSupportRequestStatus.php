<?php

namespace App\Enums;

enum TechSupportRequestStatus: string
{
    case PENDING = "pending";
    case REVIEWED = "reviewed";
    case REJECTED = "rejected";
}
