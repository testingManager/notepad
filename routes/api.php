<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Base64Controller;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\PromptController;
use App\Http\Controllers\SectionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});*/

Route::post('auth/register', [AuthController::class, 'register']);
Route::post('auth/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('auth/logout', [AuthController::class, 'logout']);
    Route::get('auth/me', [AuthController::class, 'me']);

    Route::prefix('category')->group(function () {
        Route::get('all', [CategoryController::class, 'categories']);
        Route::post('new', [CategoryController::class, 'save']);
        Route::post('delete', [CategoryController::class, 'delete']);
        Route::get('edit/{id}', [CategoryController::class, 'edit']);
        Route::post('update', [CategoryController::class, 'update']);
    });

    Route::prefix('section')->group(function () {
        Route::get('list/{categoryId}', [SectionController::class, 'all']);
        Route::post('save', [SectionController::class, 'save']);
        Route::post('remove', [SectionController::class, 'delete']);
        Route::post('change', [SectionController::class, 'update']);
    });

    Route::prefix('prompt')->group(function () {
        Route::get('list/{categoryId}/{sectionId}', [PromptController::class, 'list']);
        Route::post('create', [PromptController::class, 'create']);
        Route::post('increment-rating', [PromptController::class, 'incrementRating']);
        Route::post('delete', [PromptController::class, 'delete']);
        Route::post('update', [PromptController::class, 'update']);
        Route::get('search/{search}', [PromptController::class, 'search']);
    });

    Route::prefix('base64')->group(function () {
        Route::post('encode', [Base64Controller::class, 'encode']);
        Route::post('decode', [Base64Controller::class, 'decode']);
    });

});
