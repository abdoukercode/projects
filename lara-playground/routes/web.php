<?php

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

Route::get('/', function () {

    //dd(auth()->user()->name());
    return new App\Mail\welcome();
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/send', 'QueueController@send')->name('queue');
Route::get('/queue', 'QueueController@index')->name('queue');

