<?php

namespace App\Controller;

use App\Form\ContactType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ContactController extends AbstractController
{
    /**
     * @Route("/contact", name="contact")
     */
    public function contact(Request $request, \Swift_Mailer $mailer)
    {
        $form= $this->createForm(ContactType::class);
        $form->handleRequest($request);

       // $this->addFlash('info', 'some Info');

        if($form->isSubmitted() && $form->isValid()){
            $contactFormData = $form->getData();
            //dump($contactFormData);

            $message = (new \Swift_Message('You Got Mail!'))
                ->setFrom($contactFormData['email'])
                ->setTo('paldinkle@mailinator.com')
                ->setBody(
                    $contactFormData['message'],
                   'text/plain'
                )
           ;

           $mailer->send($message);
            $this->addFlash('success', 'message was sent');


            return $this->redirectToRoute('contact');
        }
        return $this->render('contact/index.html.twig', [
            'our_form' => $form->createView()
        ]);


    }
}
