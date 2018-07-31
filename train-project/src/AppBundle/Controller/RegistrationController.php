<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Menber;
use AppBundle\Form\Type\MenberType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class RegistrationController extends Controller
{
    /**
     * @Route("/register", name="registration")
     */
    public function registerAction(Request $request)
    {
        $menber= new Menber();
        $form = $this->createForm(MenberType::class, $menber, [
        ]);

        // Check submit and validation
        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid()){
            $password = $this
                ->get('security.password_encoder')
                ->encodePassword(
                    $menber,
                    $menber->getPlainPassword()
                );
            $menber->setPassword($password);

            $em = $this->getDoctrine()->getManager();
            $em->persist($menber);
            $em->flush();

            $token = new UsernamePasswordToken(
                $menber,
                $password,
                'main',
                $menber->getRoles()
            );

            $this->get('security.token_storage')->setToken($token);
            $this->get('session')->set('_security_main', serialize($token));
            $this->addFlash('success', ' you are now registered !!') ;
            return $this->redirectToRoute('homepage');
        }
        return $this->render('registration/register.html.twig', array(
            'registration_form' => $form->createView()
        ));
    }

}
