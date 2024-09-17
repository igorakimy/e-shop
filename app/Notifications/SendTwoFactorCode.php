<?php

namespace App\Notifications;

use App\Enums\LoginType;
use App\Notifications\Channels\SmsChannel;
use App\Notifications\Messages\SmsMessage;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Channels\MailChannel;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Carbon;

class SendTwoFactorCode extends Notification implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct(
        private readonly LoginType $loginType
    ) {
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param object $notifiable
     * @return string
     */
    public function via(object $notifiable): string
    {
        return $this->loginType === LoginType::Phone
            ? SmsChannel::class
            : MailChannel::class;
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
            ->subject("Попытка входа в аккаунт " . Carbon::now()->format('d.m.Y H:i'))
            ->line("В Ваш аккаунт $notifiable->email осуществляется попытка входа")
            ->line('Код доступа:')
            ->action($notifiable->two_factor_code, '');
    }

    /**
     * Get the sms representation of the notification.
     */
    public function toSms(object $notifiable): SmsMessage
    {
        return (new SmsMessage)
            ->to("+$notifiable->phone")
            ->line("Код доступа: $notifiable->two_factor_code");
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [];
    }
}
