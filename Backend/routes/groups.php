<?php

use App\Http\Controllers\Education\EducationController;
use App\Http\Controllers\Experience\ExperienceController;
use App\Http\Controllers\Extras\ExtrasController;
use App\Http\Controllers\Projects\ProjectController;
use App\Http\Controllers\Skills\SkillController;
use Illuminate\Support\Facades\Route;

Route::get('/skills', [SkillController::class, 'index']);
Route::get('/experience', [ExperienceController::class, 'index']);
Route::get('/education', [EducationController::class, 'index']);
Route::get('/projects', [ProjectController::class, 'index']);
Route::get('/extras', [ExtrasController::class, 'index']);
