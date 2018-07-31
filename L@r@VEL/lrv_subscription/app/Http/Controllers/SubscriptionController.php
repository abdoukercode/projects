<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe\Stripe;


class SubscriptionController extends Controller
{
    public function index()
    {
        return view('subscribe');
    }

    // stripe/stripe-php method
//    public function store(Request $request)
//    {
//        // Set your secret key: remember to change this to your live secret key in production
//// See your keys here: https://dashboard.stripe.com/account/apikeys
//        Stripe::setApiKey(config('services.stripe.secret'));
//
//// Token is created using Checkout or Elements!
//// Get the payment token ID submitted by the form:
//        $token = $_POST['stripeToken'];
//
//// creating customer
//        $customer = \Stripe\Customer::create(array(
//            "email" => $request->email,
//            "source" => $token
//        ));
//
//// Charge the user's card:
//        $charge = \Stripe\Charge::create(array(
//            "amount" => 1000,
//            "currency" => "eur",
//            "customer" => $customer->id,
//        ));
//        auth()->user()->update(['stripe_id'=>$customer->id]);
//        auth()->user()->AssignRole('subscriber');
//        return redirect('/blog');
//
//
//    }


//Laravel cashier method
    public function store(Request $request)
    {

        $token =$request->stripeToken;

        auth()->user()->newSubscription('main','Monthly')->withCoupon($request->coupon)->create($token);
        auth()->user()->assignRole('subscriber');
        return redirect('/blog');
    }

}
