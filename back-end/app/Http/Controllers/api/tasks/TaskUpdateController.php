<?php

namespace App\Http\Controllers\api\tasks;

use App\Http\Controllers\Controller;
use App\Repositories\tasks\TasksRepository;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class TaskUpdateController extends Controller
{

    public function handle(Request $request, Response $response, int $id): Response
    {
        if (!($task = TasksRepository::find($id))) return new Response([], 404);

        return new Response(TasksRepository::update([
            'id' => $id,
            'description' => ($request->get('description') ?? $task['description']),
            'title' => ($request->get('title') ?? $task['title']),
            'status' => ($request->get('status') ?? $task['id']),
        ]), 200);
    }
}
