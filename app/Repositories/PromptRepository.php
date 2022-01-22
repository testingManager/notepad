<?php


namespace App\Repositories;

use App\Models\Prompt as Model;

class PromptRepository extends AbstractRepository
{

    public function promptsByCategoryIdAndSectionId(int $categoryId, int $sectionId)
    {
        return $this->startConditions()->where(['category_id' => $categoryId, 'section_id' => $sectionId])->orderBy('title', 'desc')->get();
    }

    public function create(int $userId, array $params): bool
    {
        $params += [
            'title' => null,
            'code' => null,
            'categoryId' => null,
            'sectionId' => null,
            'modifiers' => null
        ];

        $prompts = $this->startConditions();

        $prompts->title = $params['title'];
        $prompts->code = $params['code'];
        $prompts->modifiers = $params['modifiers'];
        $prompts->category_id = $params['categoryId'];
        $prompts->section_id = $params['sectionId'];
        $prompts->rating = 0;
        $prompts->user_id = $userId;

        return $prompts->save();
    }

    public function increment($id)
    {
        $this->startConditions()->where('id', $id)->increment('rating', 1);
    }

    public function delete(int $userId, int $promptId): void
    {
        $this->startConditions()->where(['id' => $promptId, 'user_id' => $userId])->delete();
    }

    public function update(array $params): void
    {
        $this->startConditions()->where('id', $params['id'])->update($params);
    }

    public function search($search)
    {
        return $this->startConditions()
            ->where('title', 'LIKE', '%' . $search . '%')
            ->orWhere('code', 'LIKE', '%' . $search . '%')
            ->get();
    }

    protected function getModelClass(): string
    {
        return Model::class;
    }
}
