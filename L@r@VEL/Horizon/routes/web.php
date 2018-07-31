<?php


use App\Mail\UserRegistered;
use Illuminate\Support\Facades\Mail;
use App\Jobs\SomeJob;
use App\User;

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
   // Mail::to('test@example.com')->queue(new UserRegistered);
    return view('welcome');
});
 Route::get('/jobs/{jobs}', function ($jobs) {
     $user = User::find(1);
    for($i = 0; $i < $jobs; $i++){
        SomeJob::dispatch($user);
    }
    return "done";
}); 

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
