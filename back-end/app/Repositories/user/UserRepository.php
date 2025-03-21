<?php

namespace App\Repositories\user;

use Illuminate\Support\Facades\DB;

class UserRepository
{

    /**
     * @param array{email:string,name:string,password:string,description:string} $data
     */
    public function create(array $data)
    {
        DB::insert("INSERT INTO users(email, name, password, description) VALUES(?, ?, ?, ?)", [$data['email'], $data['name'], $data['password'], $data['description']]);
    }

    /**
     * @param string $email
     */
    public function exists($email)
    {
        return DB::table('users')->where('email', $email)->first();
    }
}
