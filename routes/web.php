<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'title' => '👋 Welcome',
    ]);
})->name('welcome');

Route::get('/about', function () {
    return Inertia::render('About', [
        'title' => 'ℹ About',
    ]);
})->name('about');
