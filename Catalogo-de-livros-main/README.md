Catálogo de Livros

Pré-requisitos

Node.js instalado


Como Rodar

npm install
npm run dev


Decisõe:

React + Vite: Escolhidos pela agilidade no desenvolvimento e performance de build.

Componentização: A interface foi dividida em componentes menores (SearchBar, BookList, NewBookForm) para garantir a reutilização e a clareza do código.

Context API: Utilizada para o Gerenciamento de Tema (Claro/Escuro). Isso evita o "prop drilling" (passar propriedades por muitos níveis), permitindo que o tema seja acessado globalmente.
Hooks Essenciais:

useState: Gerenciamento de inputs e listas.

useEffect: Simulação de requisição API (carregar books.json) e efeitos colaterais.

useRef: Implementação de foco automático no campo de busca para melhor UX.

Custom Hook (useLocalStorage): Criamos um hook personalizado para abstrair a lógica de persistência de dados no navegador, mantendo os componentes limpos e a lógica reutilizável.

Implementações :

React Router DOM: Adicionado para transformar o projeto em uma SPA (Single Page Application) com navegação real.

Arquitetura de Rotas:

MainLayout: Criado com <Outlet /> para manter o Cabeçalho e Rodapé fixos enquanto o conteúdo muda.

Rotas Dinâmicas: Implementada a rota /catalogo/:id para exibir detalhes de cada livro separadamente.
Novos Hooks e Recursos:

useParams: Utilizado na página de Detalhes para ler o ID da URL e carregar o livro correto.

useNavigate: Implementado para navegação programática (botão "Acessar Catálogo" e botão "Voltar").

<Link> e <NavLink>: Substituem as tags <a> tradicionais para navegação declarativa sem recarregar a página.


Integrantes do grupo:

Assuero Eduardo Cândido Guimarães - 01698585

Giovanni Saverio Svedese Rocha - 01725339

Guilherme Soares de Araújo Rocha – 01718731

Maria Clara Peixoto de Sousa – 01714429

Matheus Rodrigues de Souza – 01702755

Thaysa Maria Cordeiro Santiago – 01701779