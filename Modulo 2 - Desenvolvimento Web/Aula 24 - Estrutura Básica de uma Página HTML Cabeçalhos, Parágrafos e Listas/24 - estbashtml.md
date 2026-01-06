# Estrutura Básica de uma página HTML: Cabeçalhos, Parágrafos e Listas

## O que é HTML

HTML é um acrônimo para HyperText Markup Language (Linguagem de Marcação de Hipertexto). Ele não é uma linguagem de programação propriamente dita, mas sim uma linguagem de marcação utilizada para estruturar conteúdos na web, possuindo sintaxe e semântica próprias.

O termo hypertext refere-se a uma marcação específica que permite a navegação entre diferentes textos por meio de links (muito comum no passado) e que hoje se estende também a imagens, vídeos e outros tipos de mídia.

O HTML é relativamente simples de usar. Podemos visualizar seu código clicando com o botão direito do mouse em uma página da web e selecionando a opção “View Page Source” (ou “Exibir código-fonte da página”). 

## Estrutura do Documento  
O arquivo segue o modelo padrão de um documento HTML5:  
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aula 24 - HTML</title>
</head>
<body> ... </body>
</html>
````

* `<!DOCTYPE html>`: Indica que o documento segue o padrão HTML5.
* `<html lang="en">`: Define o idioma da página.
* `<head>`: Contém metadados (charset, viewport, título).
* `<body>`: Contém todo o conteúdo visível da página.

  

## Cabeçalho (`<header>`)

A seção de cabeçalho apresenta um menu de navegação com links para “Home” e “Contato” e três níveis de títulos (`<h1>`, `<h2>`, `<h3>`) para demonstrar hierarquia de informações.

```html
<header>
    <nav>
        <a href="/home.html">Home</a>
        <a href="/contato.html">Contato</a>
    </nav>
    <h1>Aprendendo HTML na prática</h1>
    <h2>Aprendendo HTML na prática</h2>
    <h3>Aprendendo HTML na prática</h3>
</header>
```

## Seção de Parágrafos (`<section>`)

Apresenta três parágrafos com texto de exemplo (`Lorem Ipsum`) para praticar o uso da tag `<p>` e organização de conteúdo em blocos.

## Seção de Abreviações e Citações

Demonstra o uso de tags semânticas de texto:

| Tag            | Função                             | Exemplo                        |
| -------------- | ---------------------------------- | ------------------------------ |
| `<abbr>`       | Define abreviações com significado | `SUS` = Sistema Único de Saúde |
| `<blockquote>` | Citação em bloco                   | Texto citado de outra fonte    |
| `<cite>`       | Referência a uma obra              | Livro, filme, autor            |
| `<q>`          | Citação curta                      | “O amor é uma dor”             |
| `<strong>`     | Ênfase forte (negrito semântico)   | **Sul Americana**              |
| `<em>`         | Ênfase (itálico semântico)         | *bruxo*                        |
| `<u>`          | Sublinha o texto                   | *ser*                          |
| `<s>`          | Indica texto incorreto ou removido | ~~pai~~                        |

## Seção de Tabelas (`<table>`)

Criação de uma tabela para catálogo de produtos, utilizando:

* `<table>`: Define a tabela.
* `<tr>`: Cria linhas.
* `<th>`: Cabeçalhos de coluna.
* `<td>`: Células de dados.
* `colspan="3"`: Mescla células em uma única linha para o total.

```html
<table>
    <tr>
        <th>Produto</th>
        <th>Descrição</th>
        <th>Preço</th>
    </tr>
    <tr>
        <td>Smartphone</td>
        <td>Modelo com tela AMOLED 5"</td>
        <td>R$ 100,00</td>
    </tr>
</table>
```
### Resultado :
| Produto     | Descrição                     | Preço     |
|-------------|--------------------------------|-----------|
| Smartphone  | Modelo com tela AMOLED 5"      | R$ 100,00 |

### Como adicionar mais linhas?
Para adicionar mais conteúdo é só criar novos blocos `<tr>` com `<td>` dentro 
```HTML
<tr>
    <td>Novo Produto</td>
    <td>Descrição do produto</td>
    <td>R$ 00,00</td>
</tr>

```

Em tabelas maiores, é recomendado usar `<thead>` e `<tbody>` para organizar melhor o código

```HTML
    <table>
    <thead>
        <tr>
            <th>Produto</th>
            <th>Descrição</th>
            <th>Preço</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Smartphone</td>
            <td>Modelo com tela AMOLED 5"</td>
            <td>R$ 100,00</td>
        </tr>
        <tr>
            <td>Notebook</td>
            <td>Notebook com 8GB de RAM</td>
            <td>R$ 2.500,00</td>
        </tr>
    </tbody>
</table>

```

## Seção de Formulário (`<form>`)

Demonstra o uso de campos de entrada de dados:

| Campo         | Tipo   | Tag                       |
| ------------- | ------ | ------------------------- |
| Nome Completo | Texto  | `<input type="text">`     |
| E-mail        | E-mail | `<input type="email">`    |
| Senha         | Senha  | `<input type="password">` |

```html
<form>
    <label>Nome Completo: </label>
    <input type="text">
    <label>E-mail: </label>
    <input type="email">
    <label>Senha:</label>
    <input type="password">
</form>
```

## Seção Footer (`<footer>`)

Rodapé da página com título e texto de autoria e ano, utilizando o símbolo de copyright `&copy;`.

```html
<footer>
    <h2>Rodapé</h2>
    <p>Desenvolvido por Maria &copy; 2025</p>
</footer>
```
