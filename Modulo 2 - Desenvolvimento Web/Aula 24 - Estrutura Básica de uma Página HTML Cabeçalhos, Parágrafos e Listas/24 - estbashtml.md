# Estrutura Básica de uma página HTML: Cabeçalhos, Parágrafos e Listas

## O que é HTML

HTML é um acrônimo para Hypertext (hipertexto) Markup (marcação) Language (linguagem), ela não é uma linguagem de programação em si, porém é uma linguagem na forma de escrever, tendo sintaxe e semântica, Hypertext é uma marcação especifica que nos leva a outro texto, isso mais no passado, agora sendo relacionado a imagens, a videos. Bastante simples usar o HTML, podemos ver ele clicando com o botão direito na pagina e selecionar a opção "view Page Source". Agora vamos ver mais sobre o HTML.

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
