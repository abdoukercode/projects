<?php

namespace App\Http\Controllers;

use App\Mail\welcome;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($request)
    {
        //return view('home');
        Mail::to($request->user())->send(new Welcome);
    }
}
