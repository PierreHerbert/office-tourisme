<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();

        return response()->json([
            'success' => true,
            'users' => $users
        ]);
    }

    public function store(StoreUserRequest $request)
    {
        $user = User::create(array_merge(
            $request->all(),
            [
                'password' => Hash::make($request->password),
            ]
        ));

        return response()->json([
            'success' => true,
            'user' => $user
        ]);
    }

    public function show(User $user)
    {
        return response()->json([
            'success' => true,
            'user' => $user
        ]);
    }

    public function update(UpdateUserRequest $request, User $user)
    {
        $user->update(array_merge($request->all(), [
            'password' => ($request->password) ? Hash::make($request->password) : $user->password,
        ])); 

        return response()->json([
            'success' => true,
            'user' => $user,
        ]);
    }

    public function destroy(User $user)
    {
        $user->delete();
        return response()->json([
            'success' => true,
        ]);
    }

    public function user()
    {
        return response()->json(auth()->user());
    }
}
