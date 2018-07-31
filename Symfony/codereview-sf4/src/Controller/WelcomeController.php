<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class WelcomeController extends AbstractController
{
    /**
     * @Route("/", name="welcome")
     */
    public function index()
    {
        return $this->render('welcome/index.html.twig');
        // return new Response("hello",Response::HTTP_OK);


    }

    /**
     * @Route("/hello-page/{name}", name="hello_page", defaults={"name"="codeReview"}, requirements={})
     * @param Request $request
     * @return Response
     */
    public function hello( $name='Chris' )
    {

        return $this->render(
            'hello_page.html.twig',
            [
               'some_variable' => "chinese stuffff",
                'name' => $name
            ]
        );
    }
}
