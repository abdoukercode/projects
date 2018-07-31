<?php
/**
 * Created by PhpStorm.
 * User: abdou
 * Date: 17/07/18
 * Time: 15:26
 */

namespace MainBundle\Helper;


class Checker
{

    public static function isValid($user){
        $errors = [];
        if(empty($user->firstName)){
            $errors[] =  'Please enter firstName';
        }
        if(empty($user->lastName)){
            $errors[] =  'Please enter lastName';

        }


    }
}