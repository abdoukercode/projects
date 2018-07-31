<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function users(Request $request){
        $offset = (isset($request ->offset)) ? $request->offset : 0 ;
        $number_results = (isset($request ->number_results)) ? $request->number_results : 10 ;
        $users = User::take($number_results)->skip($offset)->get();
        return response()->json($users);
    }
}
