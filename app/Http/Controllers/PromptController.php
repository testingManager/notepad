<?php

namespace App\Http\Controllers;

use App\Http\Requests\NewPromptRequest;
use App\Http\Requests\UpdatePromptRequest;
use App\Repositories\PromptRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PromptController extends Controller
{
    public function list($categoryId, $sectionId, PromptRepository $repository): JsonResponse
    {
        $prompts = $repository->promptsByCategoryIdAndSectionId($categoryId, $sectionId);

        return response()->json($prompts);
    }

    public function create(NewPromptRequest $request, PromptRepository $repository): JsonResponse
    {
        $userId = Auth::id();
        $params = $request->all();

        if (!$repository->create($userId, $params)) {
            return response()->json(['status' => 'errors'], 500);
        }

        return response()->json(['status' => 'success']);
    }

    public function incrementRating(Request $request, PromptRepository $repository): void
    {
        $repository->increment($request->id);
    }

    public function delete(Request $request, PromptRepository $repository): JsonResponse
    {
        $promptId = $request->id;
        $userId = Auth::id();

        $repository->delete($userId, $promptId);

        return response()->json(['status' => 'success']);
    }

    public function update(UpdatePromptRequest $request, PromptRepository $repository): JsonResponse
    {
        $repository->update($request->all());
        return response()->json(['status' => 'success']);
    }

    public function search($search, PromptRepository $repository): JsonResponse
    {
        return response()->json($repository->search(urldecode($search)));
    }
}
