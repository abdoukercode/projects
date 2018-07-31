<?php

namespace App;


use Illuminate\Database\Eloquent\Model;
use App\User;
class Post extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'posts';

    /**
    * The database primary key value.
    *
    * @var string
    */
    protected $primaryKey = 'id';

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['title', 'content', 'is_premium'];

    public function user(){
        $this->belongsTo(User::class);
    }

    public function scopePremium($query){
        return $query->where('is_premium',1);
    }
    public function scopeFree($query){
        return $query->whereNull('is_premium');
    }
}
