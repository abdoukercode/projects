<?php

namespace App\Exceptions;

use Exception;

class NoNameException extends  Exception
{
    protected $message = "Yo! missing user !";
}