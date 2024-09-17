<?php

namespace App\Notifications\Messages;

class SmsMessage
{
    public string $phone;

    public array $lines = [];

    public function to(string $phone): self
    {
        $this->phone = app()->isLocal() ? '+18777804236' : $phone;
        return $this;
    }

    public function line(string $text): static
    {
        $this->lines[] = $text;

        return $this;
    }
}
