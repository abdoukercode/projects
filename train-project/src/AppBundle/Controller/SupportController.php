<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use AppBundle\Form\Type\ContactFormType;


class SupportController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction()
    {

        // Create Form
        $form = $this->createForm(ContactFormType::class, null, [
            'action' => $this->generateUrl('handle_form_submission')
        ] )
        ;   
        // replace this example code with whatever you need
        return $this->render('support/index.html.twig', array(
            'form'=>$form->createView()
        ));
    }
    /**
     * @param Request $request
     * @Route("/form-submission", name="handle_form_submission")
     * @\Sensio\Bundle\FrameworkExtraBundle\Configuration\Method("POST")
     */
public function handleFormSubmission(Request $request){
    // Create Form
    $form = $this->createForm(ContactFormType::class)
    ;   

    // Check submit and validation
   $form->handleRequest($request);
    if(! $form->isSubmitted() || !$form->isValid()){

        return $this->redirectToRoute('homepage');
    }
    $data = $form->getData();
        dump($data['from']);
        dump($data['message']);

        $message = \Swift_Message::newInstance()
        ->setSubject('Contact Form Submission')
        ->setFrom($form->getData()['from'])
        ->setTo('1336a7bc03-f6e44a@inbox.mailtrap.io')
        ->setBody(
            $form->getData()['message'],
            'text/plain'
        )
    ;
    
    $this->get('mailer')->send($message);

    $this->addFlash('success', ' message was sent');
    return $this->redirectToRoute('homepage');
    }

}
