<?php

namespace App\Models\task;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TaskModel extends Model
{
    use HasFactory;

    protected $table = 'tasks';

    protected $fillable = ['title', 'status', 'description'];
}
