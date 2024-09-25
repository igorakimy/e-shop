<?php

use App\Http\Controllers\Shop\AboutController;
use App\Http\Controllers\Shop\AuthClientController;
use App\Http\Controllers\Shop\BrandController;
use App\Http\Controllers\Shop\ClientCardController;
use App\Http\Controllers\Shop\CorporateDepartmentController;
use App\Http\Controllers\Shop\DeliveryAndPaymentController;
use App\Http\Controllers\Shop\HomeController;
use App\Http\Controllers\Shop\LegalInfoController;
use App\Http\Controllers\Shop\PartnersController;
use App\Http\Controllers\Shop\PromotionController;
use App\Http\Controllers\Shop\ShopController;
use App\Http\Controllers\Shop\SuppliersController;
use App\Http\Controllers\Shop\TechSupportController;
use App\Http\Controllers\Shop\UserController;
use App\Http\Controllers\Shop\WarrantyTermsController;
use App\Http\Controllers\Shop\WorkController;
use Illuminate\Support\Facades\Route;

/** Home */
Route::get('/', [HomeController::class, 'index'])->name('home');

/** Auth */
Route::middleware(['auth', 'two-factor'])->group(function () {
    Route::get('/users/profile', [UserController::class, 'profile'])->name('users.profile');
    Route::post('/users/{user}/create-card', [UserController::class, 'createCard'])->name('users.create_card');
    Route::put('/users/{user}', [UserController::class, 'update'])->name('users.update');
    Route::get('sign-out', [AuthClientController::class, 'signOut'])->name('sign_out');
});
Route::post('/sign-in', [AuthClientController::class, 'signIn'])->name('sign_in');
Route::post('/sign-up', [AuthClientController::class, 'signUp'])->name('sign_up');
Route::get('/registration', [AuthClientController::class, 'registration'])->name('registration');
Route::post('/confirm-code', [AuthClientController::class, 'confirmCode'])->name('confirm_code');
Route::post('/resend-code', [AuthClientController::class, 'resendCode'])->name('resend_code');

/** Shop */
Route::get('/shop', [ShopController::class, 'catalog'])->name('shop');
Route::get('/shop/markdown', [ShopController::class, 'markdown'])->name('shop.markdown');
Route::get('/shop/{path}', [ShopController::class, 'catalog'])
    ->name('shop.catalog')
    ->where('path', '[a-zA-Z0-9-/_]+');

/** Brands */
Route::get('/brands', [BrandController::class, 'index'])->name('brands');
Route::get('/brands/{slug}', [BrandController::class, 'show'])->name('brand');

/** Promotions */
Route::get('/promotions', [PromotionController::class, 'index'])->name('promotions');
Route::get('/promotions/{promotion}', [PromotionController::class, 'show'])->name('promotion');

/** Technical support */
Route::get('/tech-support', [TechSupportController::class, 'index'])->name('tech_support');
Route::post('/tech-support', [TechSupportController::class, 'createRequest'])->name('tech_support.create');

/** Corporate department */
Route::get('/corporate-dept', [CorporateDepartmentController::class, 'index'])->name('corporate_department');

/** Partners */
Route::get('/partners', [PartnersController::class, 'index'])->name('partners');

/** Client card */
Route::get('/client-card', [ClientCardController::class, 'index'])->name('client_card');

/** Work */
Route::get('/work', [WorkController::class, 'index'])->name('work');

/** Suppliers */
Route::get('/suppliers', [SuppliersController::class, 'index'])->name('suppliers');

/** Delivery and payment */
Route::get('/delivery-and-payment', [DeliveryAndPaymentController::class, 'index'])
    ->name('delivery_and_payment');

/** About */
Route::get('/about', [AboutController::class, 'index'])->name('about');

/** Warranty terms */
Route::get('/warranty-terms', [WarrantyTermsController::class, 'index'])->name('warranty_terms');

/** Legal info */
Route::get('/legal-info', [LegalInfoController::class, 'index'])->name('legal_info');

/** Others */
Route::get('/shops', [ShopController::class, 'shops'])->name('shops');
Route::get('/privacy-policy', [ShopController::class, 'privacyPolicy'])->name('privacy_policy');
Route::get('/selling-rules', [ShopController::class, 'sellingRules'])->name('selling_rules');
Route::get('/site-using-rules', [ShopController::class, 'siteUsingRules'])->name('site_using_rules');
Route::get('/compare', [ShopController::class, 'compare'])->name('compare');
Route::get('/favorite', [ShopController::class, 'favorite'])->name('favorite');
Route::get('/cart', [ShopController::class, 'cart'])->name('cart');
Route::get('/orders', [ShopController::class, 'orders'])->name('orders');
