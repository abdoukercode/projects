<?php

namespace App\Http\Controllers;

use App\Jobs\SendWelcomeEmail;
use Illuminate\Http\Request;
use Log;
use Mail;

class QueueController extends Controller
{
    public function index()
    {
        return view("queue.index");

    }
// without queue
//    public function send()
//    {
//        Log::info("Request cycle without Queues started");
//        Mail::send('emails.queue', ['data'=>'data'], function ($message) {
//
//            $message->from('lrvplayground@gmail.com', 'abdou webdev');
//
//            $message->to('abdou.kercode@gmail.com');
//
//        });
//        Log::info("Request cycle without Queues finished");
//
//    }
// queue method
    public function send()
    {
        Log::info("Request Cycle with Queues Begins");
        $this->dispatch((new SendWelcomeEmail())->delay(60000 * 5));
        Log::info("Request Cycle with Queues Ends");
    }
}
