<?php

namespace App\Http\Controllers\api\user;

use App\Http\Controllers\Controller;
use App\Repositories\user\UserRepository;

class UserController extends Controller
{

    public UserRepository $repository;

    public function __construct()
    {
        $this->repository = new UserRepository();
    }
}
