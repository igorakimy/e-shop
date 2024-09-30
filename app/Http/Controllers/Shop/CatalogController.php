<?php

namespace App\Http\Controllers\Shop;

use App\Enums\ProductAvailability;
use App\Http\Controllers\Controller;
use App\Http\Resources\ProductCollection;
use App\Models\Category;
use App\Models\Product;
use App\Models\Url;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class CatalogController extends Controller
{
    /**
     * Catalog of products categories.
     *
     * @param Request $request
     * @param null $path
     * @return Response
     */
    public function index(Request $request, $path = null): Response
    {
        if (! $path) {
            return $this->renderCatalog();
        }

        $url = Url::query()
            ->where('address', $path)
            ->firstOrFail();

        $model = $url->model;

        if ($model instanceof Product) {
            return $this->renderProduct($model);
        }

        return $this->renderCategoryProducts($model, $request);
    }

    /**
     * Отобразить список категорий продуктов.
     *
     * @return Response
     */
    private function renderCatalog(): Response
    {
        $categories = Category::query()
            ->whereDoesntHave('parent')
            ->orderBy('position')
            ->get();

        return Inertia::render('Shop/Catalog', [
            'title' => 'Каталог',
            'subCategories' => $categories,
        ]);
    }

    /**
     * Отобразить конкретный продукт.
     *
     * @param Product $product
     * @return Response
     */
    private function renderProduct(Product $product): Response
    {
        $product->load(['promotion', 'brand', 'propertyValues']);

        $productProperties = $product->propertyValues
            ->groupBy('property.group.name')
            ->map(function ($props, $group) {
                return [
                    'group' => $group,
                    'properties' => $props,
                ];
            })
            ->values();

        return Inertia::render(
            'Shop/Product',
            compact('product', 'productProperties')
        );
    }

    /**
     * Отобразить список продуктов конкретной категории.
     *
     * @param Category $category
     * @param Request $request
     * @return Response
     */
    private function renderCategoryProducts(Category $category, Request $request): Response
    {
        $products = $category->products()
            ->with([
                'promotion',
                'media',
                'propertyValues',
                'propertyValues.property'
            ]);

        if ($request->filled('filter')) {

            // filtering by price
            if ($request->filled('filter.price')) {
                $products->whereRaw('price - discount >= ?', [$request->input('filter.price.from')])
                    ->whereRaw('price - discount <= ?', [$request->input('filter.price.to')]);
            }

            // filtering by availability
            if ($request->filled('filter.exist')) {
                $availability = $request->input('filter.exist.0');
                if ($availability === '1') {
                    $products->where('in_stock', ProductAvailability::InStock->value);
                } elseif ($availability === '2') {
                    $products->whereNotNull('expected_at');
                } else {
                    $products->where('in_stock', ProductAvailability::ToOrder->value);
                }
            }

            // filtering by brand
            if ($request->filled('filter.Бренд')) {
                $products->whereRelation('brand', function ($query) use ($request) {
                    $query->whereIn('name', $request->input('filter.Бренд'));
                });
            }

            // other filtering
            $filters = $request->input('filter', []);
            unset($filters['Бренд']);
            unset($filters['exist']);
            unset($filters['price']);
            foreach ($filters as $property => $filter) {
                $products->whereRelation('propertyValues', function ($query)
                use ($request, $property, $filter) {
                    $index = 0;
                    foreach ($filter as $value) {
                        if ($index === 0) {
                            $query->whereRelation('property', 'name', $property)
                                ->where('value', $value);
                        } else {
                            $query->orWhereRelation('property', 'name', $property)
                                ->where('value', $value);
                        }
                        $index++;
                    }
                });
            }
        }

        $products = $products->orderBy('in_stock')
            ->orderByDesc('price')
            ->paginate(40)
            ->withQueryString();

        $products = new ProductCollection($products);

        $minPrice = $category->products()->min('price');

        $maxPrice = $category->products()->max('price');

        $brands = $category->products
            ->load(['brand'])
            ->pluck('brand.name')
            ->unique()
            ->sort(function (string $brandOne, string $brandTwo) {
                return strtolower($brandOne) <=> strtolower($brandTwo);
            })
            ->values()
            ->toArray();

        $filters = $category->products
            ->load(['propertyValues', 'propertyValues.property'])
            ->flatMap(function ($product) {
            return $product->propertyValues->map(function ($ppv) {
                return [
                    'name' => $ppv->property->name,
                    'value' => $ppv->value,
                ];
            });
        })
        ->groupBy('name')
        ->filter(function ($values, $key) {
            return ! in_array($key, ['Вес', 'Страна производства']);
        })
        ->map(function ($values, $key) {
            return [
                'name' => $key,
                'slug' => Str::slug($key),
                'values' => $values->pluck('value')
                    ->unique()
                    ->sort()
                    ->values()
                    ->toArray(),
            ];
        })
        ->values();

        $filters->prepend([
            'name' => 'Бренд',
            'slug' => 'brand',
            'values' => $brands,
        ]);

        return Inertia::render('Shop/Catalog', [
            'title' => $category->name,
            'subCategories' => $category->children,
            'products' => $products,
            'minPrice' => $minPrice,
            'maxPrice' => $maxPrice,
            'filters' => $filters,
        ]);
    }
}
