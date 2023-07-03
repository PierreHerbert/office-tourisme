<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CategorieController;
use App\Http\Controllers\LieuController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

    Route::post('login', [AuthController::class, 'login']);
    Route::get('home', [LieuController::class, 'index']);

    Route::post('logout', [AuthController::class, 'logout']);

    Route::apiResource("categorie", CategorieController::class);
    Route::apiResource("lieu", LieuController::class);







