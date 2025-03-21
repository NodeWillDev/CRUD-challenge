<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $blueprint) {
            $blueprint->string("email")->nullable()->unique();
            $blueprint->string("name")->nullable();
            $blueprint->string("password")->nullable();
            $blueprint->string("description");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::drop("users");
    }
};
