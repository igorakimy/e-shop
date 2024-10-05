<?php

namespace App\Models;

use App\Traits\HasUrlAddress;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Kalnoy\Nestedset\NodeTrait;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Category extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;
    use NodeTrait;
    use HasUrlAddress;

    protected $appends = [
        'photo_url',
    ];

    protected $guarded = [];

    protected $with = [
        'url',
        'media',
    ];

    public function products(): HasMany
    {
        return $this->hasMany(Product::class);
    }

    public function rootParent(): static
    {
        return $this->parent ? $this->parent->rootParent() : $this;
    }

    public function photoUrl(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => $this->getFirstMediaUrl(Media::CATEGORIES_COLLECTION),
        );
    }

    public function updateDescendantsPaths(): void
    {
        $descendants = $this->descendants()->defaultOrder()->get();

        $descendants->push($this)->linkNodes();

        foreach ($descendants as $descendant) {
            $descendant->generateUrl()->save();
        }
    }

    public function generateUrl(): static
    {
        $slug = $this->slug;

        if (! empty($this->id)) {

            $this->url()->delete();

            $this->url()->save(new Url([
                'address' => $this->isRoot() ? $slug : $this->parent->url->address . '/' . $slug,
                'model_id' => $this->id,
                'model_type' => self::class,
            ]));
        }

        return $this;
    }

    protected static function booted(): void
    {
        static::saving(function (self $category) {
            if ($category->isDirty(['slug', 'parent_id'])) {
                $category->generateUrl();
            }
        });

        static::saved(function (self $category) {
            static $updating = false;

            if ( ! $updating && ! $category->url) {
                $updating = true;

                $category->updateDescendantsPaths();

                $updating = false;
            }
        });
    }
}
