<?php
/**
 * Created by PhpStorm.
 * User: abdou
 * Date: 28/03/18
 * Time: 17:21
 */

class UsersTableSeeder extends \Illuminate\Database\Seeder {
    public function run(){
for($i = 0; $i<10; $i++){


        \Illuminate\Support\Facades\DB::table('users')->insert([
            'name'=>'James'.$i,
            'email'=> "james.$i@bond.fr",
            "password"=>bcrypt('0000')
        ]);
        }
    }
}