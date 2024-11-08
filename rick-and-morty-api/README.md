# Rick and Morty Characters API

## Descrição
Este projeto é uma API REST desenvolvida com Laravel que gerencia e fornece informações sobre personagens da série Rick and Morty. A aplicação permite listar, filtrar e visualizar detalhes dos personagens, com dados importados da [API oficial do Rick and Morty](https://rickandmortyapi.com/).

## Funcionalidades
- Listagem paginada de personagens
- Filtragem por nome, status, espécie e gênero
- Visualização detalhada de personagens individuais
- Importação automatizada de dados da API oficial
- Endpoints RESTful com suporte a CORS

## Tecnologias Utilizadas
- **PHP 8.2**
- **Laravel 11.9**
- **MySQL**
- **PHPUnit** para testes
- **Composer** para gerenciamento de dependências

## Estrutura do Projeto
- **app/Http/Controllers/CharacterController.php**: Controlador principal para gerenciamento dos personagens
- **app/Console/Commands/ImportRickAndMortyCharacters.php**: Comando para importação de dados
- **app/Models/Character.php**: Modelo que representa um personagem
- **database/migrations/**: Migrações do banco de dados
- **tests/Feature/Http/Controllers/**: Testes automatizados
- **routes/web.php**: Definição das rotas da API

## Instalação
1. Clone o repositório:
   ```bash
   git clone [url-do-repositorio]
   ```
2. Instale as dependências:
   ```bash
   composer install
   ```
3. Configure o ambiente:
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```
4. Configure o banco de dados no arquivo **.env**:
   ```dotenv
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=rick_and_morty_db
   DB_USERNAME=seu_usuario
   DB_PASSWORD=sua_senha
   ```
5. Execute as migrações:
   ```bash
   php artisan migrate
   ```
6. Importe os dados dos personagens:
   ```bash
   php artisan import:rickandmorty
   ```

## Endpoints da API
### `GET /api/characters`
Lista os personagens com suporte a paginação e filtros.

**Parâmetros de query:**
- `name`: Filtra por nome
- `status`: Filtra por status
- `species`: Filtra por espécie
- `gender`: Filtra por gênero
- `page`: Página desejada

### `GET /api/characters/{id}`
Retorna os detalhes de um personagem específico.

### `GET /api/characters/filters`
Retorna as opções disponíveis para filtros (status, species, gender).

## Testes
Execute os testes com:
```bash
php artisan test
```

## Configuração CORS
O projeto está configurado para aceitar requisições de `http://localhost:3000`. Para alterar as origens permitidas, modifique o arquivo **cors.php**.

## Desenvolvimento
Para iniciar o ambiente de desenvolvimento:
```bash
composer dev
```

**Este comando inicia:**
- Servidor Laravel
- Fila de processamento
- Monitoramento de logs
- Servidor Vite para assets

## Licença
Este projeto está licenciado sob a licença MIT.

