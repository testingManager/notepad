<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class Base64Controller extends Controller
{
    public function encode(Request $request): JsonResponse
    {
        if (isset($request->string) && $request->string) {
            return response()->json(['status' => 'success', 'result' => base64_encode($request->string)]);
        }
        return response()->json(['status' => 'error']);
    }

    public function decode(Request $request): JsonResponse
    {
        if (isset($request->string) && $request->string) {
            return response()->json(['status' => 'success', 'result' => base64_decode($request->string)]);
        }
        return response()->json(['status' => 'error']);
    }
}
