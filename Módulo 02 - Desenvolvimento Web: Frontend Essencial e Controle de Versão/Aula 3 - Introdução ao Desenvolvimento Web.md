# Aula 03 - Introdução ao Desenvolvimento Web

## História, Tecnologias e o Papel do Front-End

O Front-End é responsável pela parte visual de um site, ou seja, tudo o que o usuário vê e interage.

## Atalhos para HTML

### Criando o arquivo

Crie um arquivo chamado:

```text
index.html
```

### Gerando a estrutura do HTML5

Digite:

```text
!
```

Depois pressione:

- `Tab`
- ou `Enter`

O VS Code gera automaticamente a estrutura básica do HTML5.

## Comentários

```html
<!-- comentário -->
```

Atalhos:

- `Ctrl + ;`
- `Ctrl + :`

## Estrutura Básica do HTML5

### DOCTYPE

```html
<!DOCTYPE html>
```

Informa ao navegador que o documento utiliza HTML5.

### Tag HTML

```html
<html lang="pt-BR">
```

É a tag raiz da página.

O atributo `lang` define o idioma do site.

Troque `"en"` por `"pt-BR"`.

### Head

```html
<head>
```

Armazena configurações que não aparecem visualmente na página.

### Charset

```html
<meta charset="UTF-8">
```

Define o padrão de caracteres.

Permite utilizar corretamente:

- á
- ç
- ã
- é
- emojis

### Viewport

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Configura a adaptação da página para diferentes dispositivos.

Relacionado ao conceito de **Mobile First** e **Responsividade**.

### Title

```html
<title>Meu primeiro site</title>
```

Define o título exibido na aba do navegador.

### Body

```html
<body>
```

Todo o conteúdo visível para o usuário deve ficar dentro desta tag.

## Primeiras Tags Visuais

A maioria das tags possui abertura e fechamento.

Exemplo:

```html
<tag>
Conteúdo
</tag>
```

### h1

```html
<h1>Título Principal</h1>
```

Título principal da página.

Deve existir apenas um `<h1>` por página.

### h2 até h6

```html
<h2>Subtítulo</h2>
```

São subtítulos organizados por hierarquia.

Quanto maior o número, menor a importância.

### p

```html
<p>Parágrafo de texto.</p>
```

Cria um parágrafo.

### ul

```html
<ul>
</ul>
```

Cria uma lista não ordenada (com marcadores).

### li

```html
<li>Item da lista</li>
```

Representa um item da lista.

Sempre deve estar dentro da tag `<ul>`.