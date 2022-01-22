<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Prompt extends Model
{
    protected $table = 'prompt';

    protected $fillable = ['id', 'code', 'title', 'modifiers', 'user_id', 'category_id', 'section_id'];
}
