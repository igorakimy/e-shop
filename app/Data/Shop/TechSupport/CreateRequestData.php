<?php

namespace App\Data\Shop\TechSupport;

use Spatie\LaravelData\Attributes\Validation\NotIn;
use Spatie\LaravelData\Data;

class CreateRequestData extends Data
{
    public function __construct(
        public string $login,
        #[NotIn(['0'])]
        public string $subject,
        public string $message,
    ) {
    }

    public static function messages(): array
    {
        return [
            'login.required' => 'Это поле обязательно',
            'subject.required' => 'Заголовок сообщения не выбран',
            'subject.not_in' => 'Заголовок сообщения не выбран',
            'message.required' => 'Это поле обязательно',
        ];
    }
}
