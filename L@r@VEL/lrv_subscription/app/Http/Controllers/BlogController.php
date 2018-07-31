<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;

class BlogController extends Controller
{
    public function index()
    {
        $posts=  Post::all();

        //show only premium
        //$posts=  Post::Premium()->get();

        return view('blog.index')->with('posts', $posts);

    }

    public function single(Post $post)
    {
        return view("blog.single", compact('post'));
    }

}
