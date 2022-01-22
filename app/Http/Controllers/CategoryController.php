<?php

namespace App\Http\Controllers;

use App\Http\Requests\NewCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Models\Category;
use App\Repositories\CategoryRepository;
use App\Services\ImageService\ImageUpload;
use http\Env\Response;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    public function categories(): JsonResponse
    {
        $categories = Category::all();

        return response()->json($categories);
    }

    public function save(NewCategoryRequest $request, CategoryRepository $categoryRepository): JsonResponse
    {
        $params = [
            'name' => $request->name,
            'slug' => Str::slug($request->name),
            'image' => $request->file('image')
        ];

        if ($categoryRepository->checkIsExistCategoryByUserId(Auth::id(), $params['slug'])) {
            return response()->json(['status' => 'error', 'errors' => ['name' => 'У вас уже есть категория с таким названием']], 500);
        }

        $params['image'] = ImageUpload::uploadImage( $params['image'], Auth::id(),  $params['slug']);
        $categoryRepository->newCategory(Auth::id(), $params);
        return response()->json(['status' => 'success']);
    }

    public function delete(Request $request, CategoryRepository $categoryRepository): JsonResponse
    {
        $categoryId = $request->id;
        $categoryName = $request->name;
        $userId = Auth::id();

        if ($categoryRepository->deleteCategory($categoryId, $userId)) {
            $fileName = $userId . '/' . $categoryName . '.webp';
            $file = str_replace('/', DIRECTORY_SEPARATOR,storage_path() . '/app/public/images/' . $fileName);
            if (file_exists($file)) {
                Storage::delete('/public/images/' . $fileName);
            }

        }
        return response()->json(['status' => 'success']);
    }

    public function edit(int $id, CategoryRepository $categoryRepository): JsonResponse
    {
        $category = $categoryRepository->getCategoryByIdAndUserId($id, Auth::id());

        return response()->json($category);
    }

    public function update(UpdateCategoryRequest $request, CategoryRepository $categoryRepository): JsonResponse
    {
        $params['name'] = $request->name;
        $params['slug'] = Str::slug($request->name);
        $categoryId = (int)$request->id;
        $userId = Auth::id();

        $oldCategory = $categoryRepository->getCategoryByIdAndUserId($categoryId, $userId);
        if ($categoryId !== (int)$oldCategory->id) {
            return response()->json(['status' => 'error', 'errors' => ['name' => 'У вас уже есть категория с таким названием']], 500);
        }

        $category = $categoryRepository->getCategoryByIdAndUserId($categoryId, $userId);
        $params['image'] = $category->image;

        if ($request->file('image')) {
            //$category = $categoryRepository->getCategoryByIdAndUserId($categoryId, $userId);
            $fileName = $userId . '/' . $oldCategory->slug . '.webp';
            $file = str_replace('/', DIRECTORY_SEPARATOR,storage_path() . '/app/public/images/' . $fileName);
            if (file_exists($file)) {
                Storage::delete('/public/images/' . $fileName);
            }

            $params['image'] = ImageUpload::uploadImage( $request->file('image'), $userId,  $request->name);
        }

        $categoryRepository->updateCategory($categoryId, $params);

        return response()->json(['status' => 'success']);

    }
}
