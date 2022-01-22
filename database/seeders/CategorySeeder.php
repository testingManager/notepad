<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
            [
                'name' => 'linux',
                'image' => '/img/category_image/linux.jpg',
            ],
            [
                'name' => 'php',
                'image' => '/img/category_image/php.jpg',
            ],
            [
                'name' => 'laravel',
                'image' => '/img/category_image/laravel.jpg',
            ],
            [
                'name' => 'js',
                'image' => '/img/category_image/js.jpg',
            ],
            [
                'name' => 'nginx',
                'image' => '/img/category_image/nginx.jpg',
            ],
            [
                'name' => 'apache2',
                'image' => '/img/category_image/apache2.jpg',
            ],
            [
                'name' => 'composer',
                'image' => '/img/category_image/composer.jpg',
            ],
            [
                'name' => 'npm',
                'image' => '/img/category_image/npm.jpg',
            ],
            [
                'name' => 'git',
                'image' => '/img/category_image/git.jpg',
            ],
            [
                'name' => 'sql',
                'image' => '/img/category_image/sql.jpg',
            ]
        ];
        foreach ($categories as $category) {
            DB::table('categories')->insert($category);
        }
    }
}
