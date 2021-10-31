<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LandingPageController;
use App\Http\Controllers\HomeController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::prefix('Admin')->group(function () {

    Auth::routes();
    // ~~~~~~~~ Authentication Routes... ~~~~~~~~
    // Route::get('login', 'App\Http\Controllers\Auth\LoginController@showLoginForm')->name('login');
    // Route::post('login', 'App\Http\Controllers\Auth\LoginController@login');
    // Route::post('logout', 'App\Http\Controllers\Auth\LoginController@logout')->name('logout');
    // // Registration Routes...
    // Route::get('register', 'App\Http\Controllers\Auth\RegisterController@showRegistrationForm')->name('register');
    // Route::post('register', 'App\Http\Controllers\Auth\RegisterController@register');
    // // Password Reset Routes...
    // Route::get('password/reset', 'App\Http\Controllers\Auth\ResetPasswordController@showResetForm');
    // Route::post('password/email', 'App\Http\Controllers\Auth\ForgotPasswordController@sendResetLinkEmail');
    // Route::get('password/reset/{token}', 'App\Http\Controllers\Auth\ResetPasswordController@showResetForm');
    // Route::post('password/reset', 'App\Http\Controllers\Auth\ResetPasswordController@reset');


});

// Router Home page Admin
Route::get('Admin/home', [HomeController::class, 'index']);


//Return Home page
Route::get('/', [LandingPageController::class, 'index']);

Route::any('{slug}', [LandingPageController::class, 'index']);



