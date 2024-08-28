<?php

use App\Http\Controllers\Shop\BrandController;
use App\Http\Controllers\Shop\ShopController;
use Illuminate\Support\Facades\Route;

Route::get('/', [ShopController::class, 'index'])->name('home');

Route::get('/shop', [ShopController::class, 'catalog'])->name('shop');
Route::get('/shop/{path}', [ShopController::class, 'catalog'])
    ->name('shop.catalog')
    ->where('path', '[a-zA-Z0-9-/_]+');

Route::get('/sales', [ShopController::class, 'sales'])->name('sales');
Route::get('/client-card', [ShopController::class, 'clientCard'])->name('client_card');
Route::get('/shops', [ShopController::class, 'shops'])->name('shops');
Route::get('/work', [ShopController::class, 'work'])->name('work');
Route::get('/tech-support', [ShopController::class, 'techSupport'])->name('tech_support');
Route::get('/corporate-dept', [ShopController::class, 'corporateDepartment'])->name('corporate_department');
Route::get('/partners', [ShopController::class, 'partners'])->name('partners');
Route::get('/suppliers', [ShopController::class, 'suppliers'])->name('suppliers');
Route::get('/delivery-and-payment', [ShopController::class, 'deliveryAndPayment'])->name('delivery_and_payment');
Route::get('/about', [ShopController::class, 'about'])->name('about');
Route::get('/warranty-terms', [ShopController::class, 'warrantyTerms'])->name('warranty_terms');
Route::get('/legal-info', [ShopController::class, 'legalInfo'])->name('legal_info');
Route::get('/privacy-policy', [ShopController::class, 'privacyPolicy'])->name('privacy_policy');
Route::get('/selling-rules', [ShopController::class, 'sellingRules'])->name('selling_rules');
Route::get('/site-using-rules', [ShopController::class, 'siteUsingRules'])->name('site_using_rules');
Route::get('/compare', [ShopController::class, 'compare'])->name('compare');
Route::get('/favorite', [ShopController::class, 'favorite'])->name('favorite');
Route::get('/cart', [ShopController::class, 'cart'])->name('cart');
Route::get('/orders', [ShopController::class, 'orders'])->name('orders');

Route::get('/brands', [BrandController::class, 'index'])->name('brands');
Route::get('/brands/{slug}', [BrandController::class, 'show'])->name('brand');
