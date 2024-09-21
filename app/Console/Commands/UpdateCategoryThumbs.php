<?php

namespace App\Console\Commands;

use App\Models\Category;
use App\Models\Media;
use App\Models\Product;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileDoesNotExist;
use Spatie\MediaLibrary\MediaCollections\Exceptions\FileIsTooBig;

class UpdateCategoryThumbs extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'categories:update-thumbs';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Updates categories images selects image of most expensive product';

    /**
     * @return void
     * @throws FileDoesNotExist
     * @throws FileIsTooBig
     */
    public function handle(): void
    {
        $categories = Category::query()
            ->with(['products', 'children', 'parent'])
            ->get();

        /** @var Category $category */
        foreach ($categories as $category) {
            $products = [];
            $this->collectdNestedProducts($category, $products);
            $product = collect($products)->sortByDesc('price')->first();
            $this->addMediaFromProductToCategory($product, $category);
        }

        $this->info('Categories thumbs updated successfully!');
    }

    /**
     * @throws FileDoesNotExist
     * @throws FileIsTooBig
     */
    private function collectdNestedProducts($category, &$products): void
    {
        $children = $category->children;

        if ($children->isEmpty()) {
            $products[] = $category->products->sortByDesc('price')->first();
            return;
        }

        /** @var Category $child */
        foreach ($children as $child) {
            $product = $child->products->sortByDesc('price')->first();
            if (! empty($product)) {
                $products[] = $product;
            }
            $this->collectdNestedProducts($child, $products);
        }
    }

    /**
     * @throws FileDoesNotExist
     * @throws FileIsTooBig
     */
    private function addMediaFromProductToCategory(Product|null $product, Category $category): void
    {
        $category->clearMediaCollection(Media::CATEGORIES_COLLECTION);

        if ($product instanceof Product) {
            $filepath = $product->getFirstMediaPath(
                Media::PRODUCTS_COLLECTION,
                'category-thumb'
            );

            $category->addMediaFromDisk($filepath,'s3')
                ->preservingOriginal()
                ->toMediaCollection(Media::CATEGORIES_COLLECTION);
        } else {
            $filepath = Storage::disk('local')
                ->path('data/images/categories/not_found.png');

            $category->addMedia($filepath)
                ->preservingOriginal()
                ->toMediaCollection(Media::CATEGORIES_COLLECTION);
        }
    }
}
