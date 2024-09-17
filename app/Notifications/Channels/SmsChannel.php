<?php

namespace App\Notifications\Channels;

use App\Notifications\Messages\SmsMessage;
use Illuminate\Notifications\Notification;
use Twilio\Exceptions\ConfigurationException;
use Twilio\Exceptions\TwilioException;
use Twilio\Rest\Client as TwilioClient;

class SmsChannel
{
    /**
     * Send the given notification.
     *
     * @param object $notifiable
     * @param Notification $notification
     * @return void
     * @throws ConfigurationException
     * @throws TwilioException
     */
    public function send(object $notifiable, Notification $notification): void
    {
        /** @var SmsMessage $message */
        $message = $notification->toSms($notifiable);

        $from = config('services.twilio.phone');
        $accountSid = config('services.twilio.sid');
        $authToken = config('services.twilio.token');

        $client = new TwilioClient($accountSid, $authToken);
        $client->messages->create(
            $message->phone,
            [
                'from' => $from,
                'body' => implode("\n", $message->lines)
            ]
        );
    }
}
