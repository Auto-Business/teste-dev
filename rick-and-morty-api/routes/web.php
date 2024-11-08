<?php

use Illuminate\Support\Facades\Route;

// Redireciona a rota raiz para 
Route::get('/', function () {
    return redirect('/characters');
});

use App\Http\Controllers\CharacterController;

Route::get('/characters/filters', [CharacterController::class, 'filterOptions']); 
Route::get('/characters', [CharacterController::class, 'index']);
Route::get('/characters/{id}', [CharacterController::class, 'show']); 

