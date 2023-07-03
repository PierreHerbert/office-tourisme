<?php

namespace App\Http\Controllers;

use App\Models\Lieu;
use Illuminate\Http\Request;

class LieuController extends Controller
{
    public function index(){

        $lieux = Lieu::with('categorie')->get();

        return response()->json([
            'success' => true,
            'lieux' => $lieux
        ]);
    }

    public function store( Request $request){

        $request->validate([
            'nomLieu' => 'required|max:100',
            'adresseLieu' => 'required',
            'latitude' => 'required',
            'longitude' => 'required',
            'descriptionLieu' => 'required',
            'categorie_id' => 'required',
        ]);

        $lieu = Lieu::create($request->all());

        // On retourne les informations du nouveau lieu en JSON
        return response()->json([
            'status' => 'Success',
            'lieu' => $lieu,
        ]);
    }

    public function show(Lieu $lieu)
    {
        return response()->json([
            'success' => true,
            'message' => 'Affichage du lieu',
            'lieu' => $lieu
        ]);
    }

    public function update(Request $request, Lieu $lieu){
        
        $lieu->update($request->all());

        return response()->json([
            'success' => true,
            'status' => 'Mise à jour avec succès',
            'lieu' => $lieu
        ]);

    }

    public function destroy(Lieu $lieu)
    {
        // On supprime la catégorie
        $lieu->delete();

        // On retourne la réponse JSON
        return response()->json([
            'success' => true,
            'status' => 'Supprimer avec succès',
        ]);
    }
}
