<?php

namespace App\Http\Controllers\api\user\create;

use App\Http\Controllers\api\user\UserController;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class UserCreate extends UserController
{

    public function handle(Request $request, Response $response)
    {
        try {
            if ($this->repository->exists($request->input('email')))
                return  new Response(["data" => ['message' => "This user alredy exists"]], 409);

            $this->repository->create([
                'description' => $request->input('description'),
                'name' => $request->input('name'),
                'password' => $request->input('password'),
                'email' => $request->input('email'),
            ]);
            return new Response(['data' => ['message' => 'User create with success']], 200);
        } catch (\Throwable $th) {
            return new Response(['data' => ['message' => 'Expected parameter not found']], 400);
        }
    }
}
