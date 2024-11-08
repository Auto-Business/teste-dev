<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Character;

class CharacterController extends Controller
{
    /**
     * Listar personagens com suporte a paginação e filtragem.
     */
    public function index(Request $request)
    {
        // Captura os parâmetros de filtro
        $name = $request->input('name');
        $status = $request->input('status');
        $species = $request->input('species');
        $gender = $request->input('gender');
    
        // Query base com filtros opcionais
        $query = Character::query();
    
        if ($name) {
            $query->where('name', 'LIKE', "%$name%");
        }
        if ($status) {
            $query->where('status', $status);
        }
        if ($species) {
            $query->where('species', $species);
        }
        if ($gender) {
            $query->where('gender', $gender);
        }
    
        // Paginação dos resultados
        $characters = $query->paginate(10);
    
        // Retorno JSON com o formato desejado
        return response()->json([
            'results' => $characters->items(), // Array de personagens na página atual
            'totalPages' => $characters->lastPage() // Número total de páginas
        ]);
    }
    

    /**
     * Mostrar detalhes de um personagem específico.
     */
    public function show($id)
    {
        $character = Character::find($id);

        if (!$character) {
            return response()->json(['message' => 'Character not found'], 404);
        }

        return response()->json($character);
    }

        /**
         * Retorna valores distintos de status, species e gender para filtros.
         */
        public function filterOptions()
        {
            try {
                // Busca valores distintos das colunas de status, species e gender
                $statuses = Character::distinct()->pluck('status');
                $species = Character::distinct()->pluck('species');
                $genders = Character::distinct()->pluck('gender');
    
                return response()->json([
                    'statuses' => $statuses,
                    'species' => $species,
                    'genders' => $genders,
                ]);
            } catch (\Exception $e) {
                return response()->json([
                    'message' => 'Erro ao buscar opções de filtros',
                    'error' => $e->getMessage(),
                ], 500);
            }
        }
    }
