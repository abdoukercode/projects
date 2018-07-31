<?php

namespace App\Http\Controllers;

use App\Jobs\ProcessImage;
use Illuminate\Http\Request;

class ResizeController extends Controller
{
    public function resize(){

        $time = microtime(true);
        $directory = storage_path('unsplash');
        $images = array_merge(
            glob("$directory/*.jpg"),
            glob("$directory/*.png")
        );

        foreach ($images as $image){
            ProcessImage::dispatch($image, 'large', 1000);
            ProcessImage::dispatch($image, 'medium', 500,500);
            ProcessImage::dispatch($image, 'small', 250,250);
        }
        //dd($images);
        // dd($time);
        //return "hey whats up";
        return ' Processus géré en ' .round(microtime(true) - $time, 2) . ' s';
    }
}
