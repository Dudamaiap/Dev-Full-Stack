# Aula 16 – Estrutura Básica de uma Página HTML: Semântica, Estruturas Principais e Formulários

## Revisão da aula anterior

Na aula anterior foram apresentados:

- Estrutura básica de um documento HTML.
- Criação do arquivo `index.html`.
- Principais tags da estrutura do documento.
- Envio do projeto para o GitHub utilizando commits.

Estrutura básica:

```html
<!DOCTYPE html>
<html>
<head>

</head>
<body>

</body>
</html>
```

### Head

Contém informações de configuração da página.

Exemplos:

- title
- configurações do documento
- metadados

Essas informações normalmente não aparecem diretamente para o usuário.

### Body

Tudo que deve aparecer na página fica dentro da tag `<body>`.

Todo conteúdo visível é colocado nessa região.

## Tags de títulos

Os títulos são criados utilizando as tags `h1` até `h6`.

```html
<h1>Título Principal</h1>

<h2>Subtítulo</h2>

<h3>Título menor</h3>
```

Características:

- `h1` representa o título principal da página.
- Normalmente existe apenas um `h1`.
- As tags `h2` até `h6` representam subtítulos em ordem hierárquica.
- A utilização correta dessas tags melhora a semântica do documento.

## Parágrafo

A tag utilizada para criar textos é:

```html
<p>Texto</p>
```

Ela é utilizada para inserir todo o conteúdo textual da página.

## Lorem Ipsum

Quando ainda não existe um texto definitivo, pode-se utilizar o Lorem Ipsum para preencher a página temporariamente.

No VS Code basta digitar:

```html
lorem
```

O editor gera automaticamente um texto de exemplo.

Esse recurso é utilizado para:

- testar layouts;
- ajustar espaçamentos;
- visualizar a página antes de receber o conteúdo final.

## Quebra de linha

Por padrão o HTML ocupa toda a largura disponível da página.

Mesmo que exista quebra de linha no código, isso não significa que haverá quebra na página.

Para forçar uma quebra utiliza-se:

```html
<br>
```

Exemplo:

```html
<p>
Primeira linha.<br>
Segunda linha.
</p>
```

## Texto em negrito

Para destacar uma palavra utiliza-se:

```html
<strong>Texto</strong>
```

Exemplo:

```html
<p>Aprendendo <strong>HTML</strong>.</p>
```

A tag `strong` cria um destaque em negrito.

## Texto em itálico

Para dar ênfase ao texto utiliza-se:

```html
<em>Texto</em>
```

Exemplo:

```html
<p><em>Importante</em></p>
```

A tag `em` deixa o texto em itálico.

## Linha horizontal

Para separar conteúdos utiliza-se:

```html
<hr>
```

Essa tag cria uma linha horizontal separando seções da página.

## Comentários

Comentários servem para documentar o código.

Eles não aparecem na página.

Sintaxe:

```html
<!-- Comentário -->
```

É recomendado comentar o código principalmente durante o aprendizado.

## Lista não ordenada

Lista cuja ordem dos itens não é importante.

Utiliza:

```html
<ul>

<li>Item</li>

</ul>
```

Exemplo:

```html
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
```

A lista aparece com marcadores (bolinhas).

## Lista ordenada

Quando a ordem importa utiliza-se:

```html
<ol>

<li>Item</li>

</ol>
```

Exemplo:

```html
<ol>
    <li>Primeiro</li>
    <li>Segundo</li>
    <li>Terceiro</li>
</ol>
```

A lista aparece numerada.

Posteriormente será possível alterar os marcadores utilizando CSS.

## Links

Para criar links utiliza-se a tag:

```html
<a></a>
```

O endereço é informado através do atributo `href`.

Exemplo:

```html
<a href="https://www.w3schools.com">
W3Schools
</a>
```

Ao clicar, o usuário é direcionado para outra página.

Também é possível utilizar links internos para navegar entre páginas do próprio projeto.

## Abrir o link em outra aba

Utiliza-se o atributo:

```html
target="_blank"
```

Exemplo:

```html
<a href="https://www.w3schools.com"
target="_blank">
W3Schools
</a>
```

Assim o navegador abre uma nova guia.

É uma prática comum para links externos.

## Imagens

As imagens são inseridas através da tag:

```html
<img>
```

Ela utiliza principalmente dois atributos.

### src

Indica onde está localizada a imagem.

Pode ser:

- um arquivo dentro do projeto;
- um endereço da internet.

Exemplo:

```html
<img src="logo-html.png">
```

Ou:

```html
<img src="img/logo-html.png">
```

Quando a imagem está dentro de uma pasta é necessário informar todo o caminho.

Exemplo:

```html
<img src="./img/logo-html.png">
```

O professor recomenda utilizar o ponto (`./`) para indicar o diretório atual.

### alt

Texto alternativo da imagem.

Exemplo:

```html
<img
src="./img/logo-html.png"
alt="Logo do HTML5">
```

Funções do atributo `alt`:

- acessibilidade;
- leitores de tela;
- descrição da imagem;
- auxilia mecanismos de busca (SEO).

É considerado uma boa prática utilizar sempre o atributo `alt`.

## Ajustando largura da imagem

Embora o recomendado seja utilizar CSS, é possível definir a largura diretamente no HTML.

Exemplo:

```html
<img
src="./img/logo-html.png"
width="80">
```

O atributo `width` define a largura da imagem em pixels.

## Live Server

O professor recomenda utilizar a extensão **Live Server** no VS Code.

Vantagens:

- atualiza automaticamente a página;
- evita pressionar F5 após cada alteração;
- facilita o desenvolvimento.

Pode ser iniciado através da opção:

```
Open with Live Server
```

ou pelo botão:

```
Go Live
```

Após iniciado, a página passa a ser executada em um servidor local (`127.0.0.1`).

## Resumo

- O conteúdo visível fica dentro da tag `<body>`.
- O `<head>` contém configurações da página.
- Os títulos utilizam as tags `h1` até `h6`.
- A tag `<p>` cria parágrafos.
- `lorem` gera texto de exemplo.
- `<br>` força quebra de linha.
- `<strong>` deixa o texto em negrito.
- `<em>` deixa o texto em itálico.
- `<hr>` cria uma linha de separação.
- Comentários utilizam `<!-- -->`.
- `<ul>` cria listas não ordenadas.
- `<ol>` cria listas ordenadas.
- `<a>` cria links.
- `href` define o destino do link.
- `target="_blank"` abre uma nova aba.
- `<img>` insere imagens.
- `src` define o caminho da imagem.
- `alt` fornece texto alternativo para acessibilidade.
- `width` altera a largura da imagem.
- O Live Server atualiza automaticamente a página durante o desenvolvimento.