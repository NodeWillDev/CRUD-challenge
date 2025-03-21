<?php

namespace App\Repositories\tasks;

use App\Models\task\TaskModel;

class TasksRepository
{
    /**     
     * @param array{id:int,title:string,description:string,status:int,created_at:string,updated_at:string}  $data
     */
    public static function create(array $data)
    {
        return TaskModel::create($data);
    }

    /**
     * @return array{id:int,title:string,description:string,status:int,created_at:string,updated_at:string}
     */
    public static function find(int $id)
    {
        return TaskModel::query()->where('id', $id)->first();
    }

    public static function delete(int $id)
    {
        $data = self::find($id);
        TaskModel::query()->where('id', $id)->delete();
        return $data;
    }

    public static function all()
    {
        return TaskModel::all();
    }

    /**
     * @param array{id:int,title:string,status:int,description:string} $data
     * @return int
     */
    public static function update(array $data): int
    {
        return TaskModel::query()->where('id', $data['id'])->update($data);
    }
}
