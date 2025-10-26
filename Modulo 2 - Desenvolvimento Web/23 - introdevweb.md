# Introdução ao Desenvolvimento Front End

## 1. História da Internet 
Nesta parte, é abordada a origem da internet e como ela evoluiu até o formato que conhecemos hoje.

**ARPANET** — foi a primeira rede de computadores interligados, criada nos EUA na década de 1960.

**MILNET** — uma ramificação militar da ARPANET.

**NSFNET** — rede acadêmica que substituiu a ARPANET e serviu como base para a internet moderna.

**WWW (World Wide Web)** — sistema de páginas interconectadas que usamos hoje, acessadas via navegador.

Também são estudados os principais protocolos que fazem a comunicação entre computadores funcionar:

**HTTP (HyperText Transfer Protocol)**: responsável pela transferência de páginas web.

**FTP (File Transfer Protocol)**: usado para transferência de arquivos.

SMTP, POP3 e IMAP: protocolos usados para envio e recebimento de e-mails.

Esses conceitos ajudam a entender como a internet realmente “conversa” entre servidores e usuários.

## 2. Como a Internet Funciona

Aqui é explicado o processo de transmissão de dados entre o cliente e o servidor.

Cliente: o navegador (como Chrome ou Firefox) que faz requisições.

Servidor: o computador que armazena o site e envia os arquivos solicitados.

Também é introduzido o conceito de modulação e demodulação, que representa a transformação dos dados digitais em sinais analógicos e vice-versa — um processo essencial para a comunicação entre computadores.

Entender esse funcionamento é importante para qualquer desenvolvedor, pois mostra o caminho que os dados percorrem antes de aparecerem na tela do usuário.

## 3. Principais Tecnologias da Web

Três tecnologias formam a base do desenvolvimento front-end:

### HTML (HyperText Markup Language)

É a linguagem de marcação usada para estruturar o conteúdo da página.
Com ela, definimos títulos, parágrafos, links, imagens e a hierarquia da informação.

Exemplo básico:

```html
<h1>Bem-vindo ao meu site</h1>
<p>Este é um parágrafo de texto.</p>
```

### CSS (Cascading Style Sheets)

O CSS é usado para estilizar o conteúdo definido pelo HTML, controlando cores, tamanhos, posicionamentos e fontes.

Exemplo:
```css
body {
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
}

h1 {
  color: blue;
  text-align: center;
}
```

Essas regras fazem o conteúdo HTML ganhar forma e estilo, deixando a página visualmente agradável e organizada.

### JavaScript

O JavaScript adiciona interatividade e dinâmica às páginas, permitindo respostas a ações do usuário (como cliques e digitação) e manipulação do conteúdo em tempo real.

Exemplo:

```javascript
function mostrarMensagem() {
  alert("Olá! Você clicou no botão.");
}
```

### Estrutura Básica de uma Página Web

Um arquivo HTML é a base de qualquer página.
Aqui está o modelo mínimo de estrutura de um site simples:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Minha Primeira Página</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Olá, Mundo!</h1>
  <p>Essa é minha primeira página com HTML e CSS.</p>
  <script src="script.js"></script>
</body>
</html>
```

 Fontes de Consulta Importantes

 MDN Web Docs (Mozilla)

Explicações completas e exemplos de HTML, CSS e JavaScript.

 W3C Standards

Organização responsável por definir os padrões da web.
W3Schools

Tutoriais práticos e exemplos rápidos de código.
 WHATWG Living Standard

Documento que mantém a especificação mais atualizada do HTML.

🗂️ Estrutura Recomendada de Pastas
Introducao-ao-Desenvolvimento-Front-end/
│
├── index.html      # Página principal
├── style.css       # Arquivo de estilos
├── script.js       # Código JavaScript
└── README.md       # Documentação

