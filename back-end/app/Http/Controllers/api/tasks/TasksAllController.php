<?php

namespace App\Http\Controllers\api\tasks;

use App\Http\Controllers\Controller;
use App\Repositories\tasks\TasksRepository;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class TasksAllController extends Controller
{

    public function handle(Request $request, Response $response): Response
    {
        return new Response(TasksRepository::all(), 200);
    }
}
