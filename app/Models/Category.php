<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


/**
 * Class Category
 * @package App\Models
 *
 * @property string $name
 * @property string $slug
 * @property string $image
 * @property int $user_id
 * @property int id
 *
 */
class Category extends Model
{
    protected $table = 'categories';


    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
