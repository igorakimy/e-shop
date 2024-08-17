<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Kalnoy\Nestedset\NodeTrait;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Category extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;
    use NodeTrait;

    protected $guarded = [];

    protected $appends = [
        'url_address'
    ];

    public function products(): HasMany
    {
        return $this->hasMany(Product::class);
    }

    public function url(): MorphOne
    {
        return $this->morphOne(Url::class, 'model');
    }

    public function updateDescendantsPaths(): void
    {
        $descendants = $this->descendants()->defaultOrder()->get();

        $descendants->push($this)->linkNodes();

        foreach ($descendants as $descendant) {
            $descendant->generatePath()->save();
        }
    }

    protected function urlAddress(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => config('app.url') . '/shop/' . $this->url->address
        );
    }

    public function generatePath(): static
    {
        $slug = $this->slug;

        if (! empty($this->id)) {
            $this->url()->save(new Url([
                'address' => $this->isRoot() ? $slug : $this->parent->url->address . '/' . $slug,
                'model_id' => $this->id,
                'model_type' => self::class,
            ]));
        }

        return $this;
    }

    protected static function boot(): void
    {
        parent::boot();

        static::saving(function (self $category) {
            if ($category->isDirty('slug', 'parent_id')) {
//                $category->generatePath();
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
