<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Models\Categorie;

class CategorieController extends Controller
{

    // Méthode qui renvoie toutes les catégories
    public function index()
    {
        // Récupération des catégories
        $categories = Categorie::all();

        // On retourne les catégories en JSON
        return response()->json([
            'success' => true,
            'categories' => $categories
        ]);
    }


    // Méthode pour enregistrer une nouvelle catégorie
    public function store(Request $request)
    {

        // On crée une nouvelle catégorie
        $categorie = Categorie::create([
            'nomCategorie' => $request->nom,
        ]);

        // On retourne les informations de la nouvelle catégorie en JSON
        return response()->json([
            'success' => true,
            'status' => 'Success',
            'categorie' => $categorie,
        ]);
    }


    // Méthode pour voir les informations d'une catégorie
    public function show(Categorie $categorie)
    {
        // On retourne les informations de la catégorie en JSON
        return response()->json([
            'success' => true,
            'categorie' => $categorie
        ]);
    }


    // Méthode pour mettre a jour les données d'une catégorie
    public function update(Request $request, Categorie $categorie)
    {

        // On met à jour la catégorie
        $categorie->update([
            'nomCategorie' => $request->nom,
        ]);

        // On retourne les informations de la catégorie modifié en JSON
        return response()->json([
            'success' => true,
            'status' => 'Mise à jour avec succès',
            'categorie' => $categorie
        ]);
    }


    // Méthode pour supprimer une catégorie
    public function destroy(Categorie $categorie)
    {
        // On supprime la catégorie
        $categorie->delete();

        // On retourne la réponse JSON
        return response()->json([
            'success' => true,
            'status' => 'Supprimer avec succès',
        ]);
    }
}