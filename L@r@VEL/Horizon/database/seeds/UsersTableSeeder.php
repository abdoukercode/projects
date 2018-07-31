<?php
/**
 * Created by PhpStorm.
 * User: abdou
 * Date: 29/03/18
 * Time: 12:56
 */

class UsersTableSeeder extends \Illuminate\Database\Seeder {
    public function run(){
for($i = 0; $i<10; $i++){


        \Illuminate\Support\Facades\DB::table('users')->insert([
            'name'=>'Rose'.$i,
            'email'=> "rose.$i@leone.fr",
            "password"=>bcrypt('0000')
        ]);
        }
    }
}
