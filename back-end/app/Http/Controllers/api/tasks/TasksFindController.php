<?php

namespace App\Http\Controllers\api\tasks;

use App\Http\Controllers\Controller;
use App\Repositories\tasks\TasksRepository;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class TasksFindController extends Controller
{

    public function handle(Request $request, Response $response, int $id): Response
    {
        return new Response(($task = TasksRepository::find($id)), $task ? 200 : 404);
    }
}
