<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Endpoints para tu portfolio
Route::get('/projects', function () {
    return [
        ["name" => "Portfolio", "tech" => ["HTML", "CSS", "JS"]],
        ["name" => "Laravel API", "tech" => ["Laravel", "REST"]]
    ];
});

Route::get('/skills', function () {
    return ["PHP", "Laravel", "JavaScript", "HTML", "CSS"];
});

Route::post('/contact', function (Request $request) {
    return [
        "status" => "success",
        "data" => $request->all()
    ];
});
