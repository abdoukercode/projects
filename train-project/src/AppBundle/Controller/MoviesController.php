<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Movie;
use AppBundle\Form\MovieType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class MoviesController extends Controller
{
    /**
     * @Route("/movies")
     */
    public function IndexAction()
    {
        return $this->render('Movies/index.html.twig', array(
            // ...
        ));
    }

    /**
     * @Route("/movies/new", name="movies_new", );
     */
    public function NewAction(Request $request)
    {

        $movie = new Movie();
        $form = $this->createForm(\AppBundle\Form\Type\MovieType::class, $movie);
        $form->handleRequest($request);
        if(!$form->isValid() || ! $form->isSubmitted()){
            return $this->redirectToRoute('homepage');
        }
        $em = $this->getDoctrine()->getManager();
        $em->persist($movie);
        $em->flush();

        $this->addFlash('success', 'youipie, slj movie created !');
        return $this->render('Movies/new.html.twig', array(
            'quote' => 'lorem ipsum stufff ...',
            'form' => $form->createView()
                ));
    }

}
