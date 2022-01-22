<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class UpdatePromptRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'min:2', 'max:100'],
            'code' => ['required', 'string'],
            'modifiers' => ['nullable', 'string'],
            'category_id' => ['required', 'integer'],
            'section_id' => ['required', 'integer'],
            'id' => ['required', 'integer'],
            'user_id' => ['required', 'integer']
        ];
    }
}
