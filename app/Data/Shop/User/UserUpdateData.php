<?php

namespace App\Data\Shop\User;

use Spatie\LaravelData\Data;

class UserUpdateData extends Data
{
    public function __construct(
        public string $nickname,
        public ?string $full_name,
        public ?string $vkontakte_id,
        public ?string $instagram_id,
        public bool $adv_sms_mailing = true,
        public bool $email_mailing = true,
    ) {
    }
}
