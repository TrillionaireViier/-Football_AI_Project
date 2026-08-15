<?php

namespace App\Http\Controllers;

use App\Models\Player;
use Illuminate\Http\Request;

class PlayerController extends Controller
{
    public function index()
    {
        return response()->json(Player::all());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'firstName' => 'nullable|string',
            'lastName' => 'nullable|string',
            'name' => 'nullable|string',
            'position' => 'nullable|string',
            'number' => 'nullable|integer',
            'age' => 'nullable|integer',
            'rating' => 'nullable|integer',
            'photoUrl' => 'nullable|string',
        ]);

        $player = Player::create($validated);
        return response()->json($player, 201);
    }

    public function show($id)
    {
        return response()->json(Player::findOrFail($id));
    }

    public function destroy($id)
    {
        $player = Player::findOrFail($id);
        $player->delete();

        return response()->json(['message' => 'Player deleted successfully']);
    }
}
