<?php


namespace App\Repositories;

use App\Models\Section as Model;

class SectionsRepository extends AbstractRepository
{
    public function categorySections(int $categoryId)
    {
        return $this->startConditions()->where('category_id', $categoryId)->orderBy('slug', 'desc')->get();
    }

    public function checkIsNameByCategoryIdAndSlug(int $userId, int $categoryId, string $slug)
    {
        return $this->startConditions()
            ->where(['user_id' => $userId, 'category_id' => $categoryId, 'slug' => $slug])
            ->first();
    }

    public function saveSection(?int $userId, array $params): bool
    {
        $params += [
            'name' => null,
            'slug' => null,
            'categoryId' => null
        ];

        $newSection = $this->startConditions();

        $newSection->name = $params['name'];
        $newSection->slug = $params['slug'];
        $newSection->category_id = $params['categoryId'];
        $newSection->user_id = $userId;

        return $newSection->save();
    }

    public function section(int $userId, int $categoryId, int $sectionId)
    {
        return $this->startConditions()
            ->where(['user_id' => $userId, 'category_id' => $categoryId, 'id' => $sectionId])
            ->first();
    }

    public function deleteSection(?int $userId, int $categoryId, int $sectionId): bool
    {
        if ($section = $this->section($userId, $categoryId, $sectionId)) {
            return $section->delete();
        }
        return false;
    }

    public function updateSection(int $sectionId, array $params)
    {
        $params += [
            'name' => null,
            'slug' => null
        ];
        return $this->startConditions()->where('id', $sectionId)->update($params);
    }

    protected function getModelClass(): string
    {
        return Model::class;
    }
}
