# Rick and Morty Frontend

## Descrição
Este é um projeto frontend que consome a API do Rick and Morty para exibir informações sobre os personagens da série.

## Funcionalidades
- **Listagem de Personagens**: Exibe uma lista paginada de personagens
- **Filtros**:
  - Busca por nome
  - Filtro por status (vivo, morto, desconhecido)
  - Filtro por espécie
  - Filtro por gênero
- **Paginação**: Navegação entre páginas de resultados
- **Detalhes do Personagem**: Página individual com informações detalhadas
- **Layout Responsivo**: Interface adaptável para diferentes tamanhos de tela
- **Design Moderno**: Estilização com CSS Modules e interface moderna

## Tecnologias Utilizadas
- **Next.js 13+**
- **React**
- **TypeScript**
- **CSS Modules**
- **Axios**
- **Lodash** (para debounce)

## Pré-requisitos
- **Node.js 16+**
- **npm** ou **yarn**

## Como Executar
1. Clone o repositório:
   ```bash
   git clone git@github.com:seu-usuario/rick-and-morty-frontend.git
   cd rick-and-morty-frontend
   ```
2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```
3. Configure as variáveis de ambiente: Crie um arquivo **.env.local** com:
   ```dotenv
   API_URL=https://rickandmortyapi.com/api
   ```
4. Execute o projeto em modo desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

## Estrutura do Projeto
```plaintext
src/
  app/
    characters/
      [id]/          # Página de detalhes do personagem
    components/      # Componentes reutilizáveis
    hooks/           # Custom hooks
  globals.css        # Estilos globais
  page.tsx           # Página inicial
```

## Scripts Disponíveis
- **`dev`**: Executa o projeto em modo desenvolvimento
- **`build`**: Gera build de produção
- **`start`**: Inicia o projeto em modo produção
- **`lint`**: Executa verificação de código

## Configurações
O projeto utiliza:
- **TypeScript** para tipagem estática
- **ESLint** para linting
- **Prettier** para formatação de código
- **Next.js** para roteamento e renderização
- **CSS Modules** para estilização isolada

## Melhorias Futuras
- Implementar testes unitários
- Adicionar PWA
- Melhorar acessibilidade
- Adicionar mais filtros
- Implementar modo escuro
- Adicionar animações

