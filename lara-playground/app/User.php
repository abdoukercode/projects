<?php

namespace App;

use App\Exceptions\NoNameException;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Exception;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];


    /**
     * @return string
     * @throws NoNameException
     *
     * @throws \Throwable
     */
    public function name(){
// first old method
 /*       if($this->name === null) {
            throw  new NoNameException();
        }*/

        // new helper

        //throw_if($this->name === null, New NoNameException());

        // another helper
        throw_unless($this->name, New NoNameException );
        return $this->name;


    }
}
