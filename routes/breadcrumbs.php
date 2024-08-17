<?php

use Diglactic\Breadcrumbs\Breadcrumbs;
use Diglactic\Breadcrumbs\Generator as Trail;
use App\Models\Url;

Breadcrumbs::for('home', function (Trail $trail) {
    $trail->push('Главная', route('home'));
});

Breadcrumbs::for('shop', function (Trail $trail) {
    $trail->parent('home');
    $trail->push('Каталог', route('shop'));
});

Breadcrumbs::for('shop.catalog', function (Trail $trail, string $path) {
    $url = Url::query()
        ->where('address', $path)
        ->firstOrFail();

    $model = $url->model;

    if ($model->parent) {
        $trail->parent('shop.catalog', $model->parent->url->address);
    } else {
        $trail->parent('shop');
    }

    $trail->push($model->name, route('shop.catalog', $model->url->address));
});

