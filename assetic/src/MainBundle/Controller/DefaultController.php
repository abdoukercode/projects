<?php

namespace MainBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    /**
     * @Route("/")
     */
    public function indexAction(Request $request)
    {

        $request->setLocale('fr');
//        $html = '';
//        $user = new \stdClass();
//        $user->firsName = 'Peter';
//        $user->lastName = 'Fisher';
//        $checker = $this->get('main.checker');
//
//        $html.= 'IS VALID: '. json_encode($checker::isValid()). '<br/>' ;
        //$html.= 'IS VALID: '. json_encode($isValid) . '<br>';
        return $this->render('MainBundle:Default:index.html.twig');
    }

}
