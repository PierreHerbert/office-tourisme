<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\Rules\Password;

class UpdateUserRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'nom' => 'string|max:100',
            'prenom' => 'string|max:100',
            'email' => 'email:rfc,dns|unique:employes,email',
            'password' => [
                Password::min(8)
                ->mixedCase()
                ->letters()
                ->numbers()
                ->symbols()
            ],
        ];
    }

    public function messages()
    {
        return [
            'nom' =>  'Le champ nom doit contenir au maximum 100 caractères.',
            'prenom' =>  'Le champ prénom doit contenir au maximum 100 caractères.',

            'email.email' =>  'Le champ email doit être une adrese valide.',
            'email.unique' =>  'Cet email existe déjà.',

            'password' => 'Le champ mot de passe doit contenir au moins 8 caractères, avec au minimum une majuscule, une minuscule, un chiffre et un symbole.',
        ];
    }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'success'   => false,
            'message'   => 'Erreurs lors de l\'envoie du formulaire.',
            'data'      => $validator->errors()
        ]));
    }
}
