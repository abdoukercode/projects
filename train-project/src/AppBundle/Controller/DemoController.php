<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;


class DemoController extends Controller
{
    /**
     * @Route("/demo", name ="demo")
     */
    public function demoAction(Request $request) {
     $data = "My wonderful Demo page";

     // Get http://127.0.0.1:8000/demo
/*      dump($request->query->get('user'));
     dump($request->query->get('age'));
 */

//dump($request);

 $form = $this->createFormBuilder()
            ->add('SomeInput')
            ->add('submit', SubmitType::class)
            ->getForm();
dump($request->get('form')['SomeInput']);
        return $this->render('base.html.twig', array(
            'data' => $data,
          
        ));

    }
}
