<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lieu extends Model
{
    use HasFactory;
    protected $fillable = ['nomLieu', 'adresseLieu','longitude','latitude' ,'descriptionLieu', 'categorie_id'];

    protected $table = 'lieu';


    public function categorie()
    {
        return $this->belongsTo(Categorie::class);
    }

}
