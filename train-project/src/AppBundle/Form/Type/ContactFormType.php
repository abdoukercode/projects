<?php
namespace AppBundle\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;

class ContactFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('from', EmailType::class,[
                'label' => "yuor email here"
            ])
            ->add('message', TextareaType::class)
            ->add('send', SubmitType::class, [
                'attr' => [
                    'class'=> 'btn btn-large btn-block'
                ]
            ])
        ;
    }
}
