<?php

namespace App\Models;

use App\Enums\WeekDay;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Shop extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;

    protected $appends = [
        'work_time',
        'map_image',
    ];

    protected $guarded = [];

    protected $with = [
        'media',
    ];

    /**
     * Working time attribute that returns formatted string.
     *
     * @return Attribute
     */
    public function workTime(): Attribute
    {
        $startDay = WeekDay::from($this->start_day)->shortName();
        $endDay = WeekDay::from($this->end_day)->shortName();
        $openTime = Carbon::parse($this->open_time)->format('H:i');
        $closeTime = Carbon::parse($this->close_time)->format('H:i');

        return Attribute::make(
            get: fn ($value) => "$startDay - $endDay. $openTime - $closeTime",
        );
    }

    /**
     * @return Attribute
     */
    public function mapImage(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => $this->getFirstMediaUrl(Media::SHOP_MAPS_COLLECTION),
        );
    }
}
