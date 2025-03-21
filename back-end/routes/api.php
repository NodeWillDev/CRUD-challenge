<?php

use App\Http\Controllers\api\tasks\TasksAllController;
use App\Http\Controllers\api\tasks\TasksCreateController;
use App\Http\Controllers\api\tasks\TasksDeleteController;
use App\Http\Controllers\api\tasks\TasksFindController;
use App\Http\Controllers\api\tasks\TaskUpdateController;
use Illuminate\Support\Facades\Route;

Route::post("tasks/create", [TasksCreateController::class, 'handle']);
Route::get("tasks/get/{id}", [TasksFindController::class, 'handle']);
Route::delete("tasks/delete/{id}", [TasksDeleteController::class, 'handle']);
Route::get("tasks/all", [TasksAllController::class, 'handle']);
Route::post("tasks/update/{id}", [TaskUpdateController::class, 'handle']);
