<?php

namespace App\Http\Middleware;

use App\Http\Resources\ProductCollection;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'appUrl' => config('app.url'),
            'currentUser' => $request->user()?->load('clientCard'),
            'categories' => function () use ($request) {
                return Category::query()
                    ->with(['children', 'media'])
                    ->whereDoesntHave('parent')
                    ->orderBy('position')
                    ->get();
            },
            'searchResults' => function () use ($request) {
                if ($request->has('query')) {
                    $query = Product::query()
                        ->select([
                            'id',
                            'name',
                            'price',
                            'discount',
                            'in_stock',
                            'delivery',
                            'category_id',
                            'short_props'
                        ])
                        ->with(['media', 'category', 'category.media'])
                        ->whereLike('name', "%{$request->input('query')}%")
                        ->when($request->filled('category'), function (Builder $q) use ($request) {
                            $category = Category::query()
                                ->where('name', $request->input('category'))
                                ->first();

                            $subCategoriesIds = $category->descendants
                                ->pluck('id')
                                ->toArray();

                            $q->whereIn('category_id', $subCategoriesIds);
                        })
                        ->orderBy('in_stock')
                        ->orderByDesc('price');

                    $resultsCount = $query->count();

                    $products = $query->paginate(40);
                    $products = new ProductCollection($products);

                    $productsForCategories = Product::query()
                        ->select('id', 'category_id')
                        ->with(['category'])
                        ->whereLike('name', "%{$request->input('query')}%")
                        ->get(['id']);

                    $categories = [];
                    foreach ($productsForCategories as $product) {
                        $name = $product->category->rootParent()->name;
                        if (! isset($categories[$name])) {
                            $categories[$name] = 0;
                        }
                        $categories[$name]++;
                    }

                    return collect([
                        'products' => $products,
                        'resultsCount' => $resultsCount,
                        'categories' => $categories,
                    ]);
                }
                return collect([
                    'products' => ['data' => []],
                    'resultsCount' => 0,
                    'categories' => [],
                ]);
            }
        ]);
    }
}
