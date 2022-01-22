<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function register(Request $request, User $user): JsonResponse
    {
        $request->validate([
            'email' => 'unique:users|required|string',
            'name' => 'string|required|min:3|max:20',
            'password' => 'required|min:6|max:20|confirmed'
        ]);

        $params = $request->all();

        $user->email = $params['email'];
        $user->name = $params['name'];
        $user->password = bcrypt($params['password']);
        $user->save();

        return $this->login();
    }

    public function login()
    {
        request()->validate([
            'email' => 'required',
            'password' => 'required'
        ]);

        $credentials = request()->only('email', 'password');

        if (Auth::attempt($credentials)) {
            request()->session()->regenerate();

            return response()->json(['user' => Auth::user(), 'status' => true]);
        }

        throw ValidationException::withMessages([
            'email' => ['The provided credentials are incorrect.'],
        ]);
    }


    public function me()
    {
        return response()->json(['user' => Auth::user(), 'auth' => true]);
    }


    public function logout()
    {
        Auth::guard('web')->logout();
    }
}
