<?php


namespace App\Repositories;

use App\Models\Category as Model;


class CategoryRepository extends AbstractRepository
{

    public function newCategory(?int $id, array $params): bool
    {
        $params += [
            'name' => null,
            'slug' => null,
            'image' => null
        ];

        $category = $this->startConditions();
        $category->name = $params['name'];
        $category->slug = $params['slug'];
        $category->image = $params['image'];
        $category->user_id = $id;

        return $category->save();
    }

    public function checkIsExistCategoryByUserId(int $userId, $slug)
    {
        return Model::where(['user_id' => $userId, 'slug' => $slug])->first();
    }

    public function deleteCategory(int $id, ?int $userId): bool
    {
        return $this->startConditions()->where(['id' => $id, 'user_id' => $userId])->delete();
    }

    public function getCategoryByIdAndUserId(int $id, ?int $userId)
    {
        return $this->startConditions()->where('id', $id)->orWhere('user_id', $userId)->first();
    }

    public function updateCategory(int $categoryId, array $params)
    {
        $params += [
            'name' => null,
            'slug' => null,
            'image' => null
        ];

        return $this->startConditions()->where('id', $categoryId)->update([
            'name' => $params['name'],
            'slug' => $params['slug'],
            'image' => $params['image']
        ]);
    }

    protected function getModelClass(): string
    {
        return Model::class;
    }
}
