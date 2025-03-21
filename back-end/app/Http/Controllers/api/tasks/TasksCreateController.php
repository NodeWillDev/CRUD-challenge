<?php

namespace App\Http\Controllers\api\tasks;

use App\Http\Controllers\Controller;
use App\Repositories\tasks\TasksRepository;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class TasksCreateController extends Controller
{

    public function handle(Request $request, Response $response): Response
    {
        try {
            return new Response(TasksRepository::create([
                'description' => ($request->get('description') ?? ''),
                'title' => ($request->get('title') ?? '*Unknow'),
                'status' => ($request->get('status') ?? 1),
            ]), 200);
        } catch (\Exception $e) {
            return new Response(["data" => [
                "message" => "An error occurred while registering the task"
            ]], 400);
        }
    }
}
