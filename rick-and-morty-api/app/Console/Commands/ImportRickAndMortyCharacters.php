<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Character;
use Illuminate\Support\Facades\Http;

class ImportRickAndMortyCharacters extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'import:rickandmorty';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Import characters from the Rick and Morty API';

    /**
     * Execute the console command.
     */
    public function handle(): void
    {
        $page = 1;
        do {
            // Faz a requisição para a API do Rick and Morty
            $response = Http::get("https://rickandmortyapi.com/api/character?page=$page");

            if ($response->successful()) {
                $data = $response->json();
                $characters = $data['results'];

                foreach ($characters as $char) {
                    // Salva ou atualiza o personagem no banco de dados
                    Character::updateOrCreate(
                        ['id' => $char['id']], // Usa o 'id' como chave única
                        [
                            'name' => $char['name'],
                            'status' => $char['status'],
                            'species' => $char['species'],
                            'type' => $char['type'],
                            'gender' => $char['gender'],
                            'origin_name' => $char['origin']['name'],
                            'origin_url' => $char['origin']['url'],
                            'location_name' => $char['location']['name'],
                            'location_url' => $char['location']['url'],
                            'image' => $char['image'],
                        ]
                    );
                }

                $page++;
            } else {
                $this->error('Failed to fetch data from the API');
                break;
            }
        } while (!empty($data['info']['next']));

        $this->info('Character import completed successfully!');
    }
}
