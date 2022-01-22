<?php

namespace App\Http\Controllers;

use App\Http\Requests\DeleteSectionRequest;
use App\Http\Requests\NewSectionRequest;
use App\Http\Requests\UpdateSectionRequest;
use App\Repositories\SectionsRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class SectionController extends Controller
{
    public function all($categoryId, SectionsRepository $repository): JsonResponse
    {
        $sections = $repository->categorySections($categoryId);

        return response()->json($sections);
    }

    public function save(NewSectionRequest $request, SectionsRepository $repository): JsonResponse
    {
        $params = [
            'name' => $request->name,
            'slug' => Str::slug($request->name),
            'categoryId' => $request->categoryId
        ];
        $userId = Auth::id();

        if ($repository->checkIsNameByCategoryIdAndSlug($userId, $params['categoryId'], $params['slug'])) {
            return response()->json(['errors' => ['name' => ['У вас уже есть подкатегория с таким именем!!!']]], 500);
        }

        $repository->saveSection($userId, $params);
        return response()->json(['status' => 'success']);
    }

    public function delete(DeleteSectionRequest $request, SectionsRepository $repository): JsonResponse
    {
        $userId = Auth::id();
        $categoryId = $request->categoryId;
        $sectionId = $request->sectionId;

        $repository->deleteSection($userId, $categoryId, $sectionId);
        return response()->json(['status' => 'success']);
    }

    public function update(UpdateSectionRequest $request, SectionsRepository $repository): JsonResponse
    {
        $params = [
            'name' => $request->name,
            'slug' => Str::slug($request->name)
        ];
        $categoryId = $request->categoryId;
        $sectionId = $request->sectionId;
        $userId = Auth::id();

        $oldCategory = $repository->checkIsNameByCategoryIdAndSlug($userId, $categoryId, $params['slug']);
        if (!$oldCategory || $sectionId === $oldCategory->id) {
            $repository->updateSection($sectionId, $params);
            return response()->json(['status' => 'success']);
        }

        return response()->json(['status' => 'error', 'errors' => ['name' => 'У вас уже есть подкатегория с таким именем!!!']], 500);

    }
}
