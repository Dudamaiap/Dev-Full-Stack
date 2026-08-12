#  Aula 5: Estilizando Páginas com CSS (Seletores e Propriedades)

##  O que é CSS?

CSS (**Cascading Style Sheets**) é a linguagem responsável pela **aparência** de uma página web.

Enquanto o **HTML** cria a estrutura da página, o **CSS** define sua apresentação visual.

Com CSS podemos alterar:

- Cor do texto
- Cor de fundo
- Fonte
- Tamanho da fonte
- Espaçamentos
- Bordas
- Alinhamento
- Dimensões
- Layout dos elementos

### Resumindo

> **HTML = Estrutura**
>
> **CSS = Aparência (Estilo)**



#  Formas de utilizar CSS

Existem **3 formas** de aplicar CSS.



## 1. CSS Inline (Em Linha)

O CSS é escrito diretamente dentro da tag HTML através do atributo `style`.

### Sintaxe

```html
<h1 style="color: blue;">Título</h1>

<p style="font-size:20px; text-align:justify;">
Texto
</p>
```

### Vantagens

- Fácil de usar
- Bom para testes rápidos
- Ideal para alterações específicas

### Desvantagens

- Polui o HTML
- Código difícil de manter
- Repete estilos
- Não reaproveita código

### Quando usar?

- Testes rápidos
- Demonstrações
- Alterações muito específicas

 Não é recomendado para projetos grandes.



## 2. CSS Interno

O CSS fica dentro da tag `<style>`, localizada no `<head>`.

### Estrutura

```html
<head>

<style>

p{
    font-size:20px;
    text-align:justify;
}

h1{
    color:blue;
}

</style>

</head>
```

### Vantagens

- Código mais organizado
- Não repete estilos
- Um único seletor estiliza todos os elementos iguais

### Desvantagens

- Funciona apenas naquela página HTML
- Em projetos com várias páginas é necessário copiar o CSS



## 3. CSS Externo  (Recomendado)

O CSS fica em um arquivo separado.

### Arquivo

```
style.css
```

No HTML fazemos a ligação:

```html
<link rel="stylesheet" href="style.css">
```

Dentro do arquivo CSS:

```css
body{
    background-color:white;
}

p{
    font-size:20px;
}
```

### Vantagens

 Organização

 Reutilização

 Fácil manutenção

 Pode ser usado em várias páginas

 É o padrão utilizado profissionalmente



# Hierarquia do CSS

Quando existe conflito entre estilos, vale a prioridade.

Da maior para a menor:

```
CSS Inline
      ↓
CSS Interno
      ↓
CSS Externo
```

O **Inline possui maior prioridade**.



#  Principais propriedades CSS

## color

Cor do texto.

```css
color: blue;
```



## background-color

Cor de fundo.

```css
background-color: aqua;
```



## font-size

Tamanho da fonte.

```css
font-size:20px;
```



## text-align

Alinhamento do texto.

Valores:

```css
left
right
center
justify
```

Exemplo:

```css
text-align:justify;
```

## width

Largura.

```css
width:400px;
```

## height

Altura.

```css
height:300px;
```

## border

Cria uma borda.

```css
border:2px solid black;
```

#  Seletores

Os seletores indicam quais elementos receberão um estilo.

Exemplo:

```css
p{

}
```

Todos os `<p>` serão estilizados.

#  Classe (class)

Serve para reutilizar estilos.

HTML

```html
<div class="card">
```

CSS

```css
.card{

}
```

Observe:

- Classe começa com **.**

```css
.card
```

A mesma classe pode ser utilizada em diversos elementos.

```html
<div class="card"></div>

<div class="card"></div>

<div class="card"></div>
```

Todos recebem o mesmo estilo.

# ID

Serve para identificar um único elemento.

HTML

```html
<p id="texto">
```

CSS

```css
#texto{

}
```
Observe:

O ID começa com **#**

```css
#texto
```

Cada ID deve existir apenas uma vez na página.

### Diferença

| Classe | ID |
||-|
| Reutilizável | Único |
| Usa `.` | Usa `#` |

#  DIV

A tag `<div>` é um contêiner.

Ela agrupa elementos.

Exemplo

```html
<div class="card">

<h1></h1>

<p></p>

</div>
```

Depois podemos estilizar toda essa região.

# Box Model

Todo elemento HTML funciona como uma caixa.

Estrutura:

```
Margin

Border

Padding

Conteúdo
```
## Margin

Espaço externo.

```css
margin:50px;
```

Também pode ser:

```css
margin:50px auto;
```

Significa:

- 50px em cima e embaixo
- Auto nas laterais

Resultado:

Elemento centralizado horizontalmente.

Também existe:

```css
margin-top
margin-right
margin-bottom
margin-left
```

## Padding

Espaço interno.

```css
padding:30px;
```

Afasta o conteúdo da borda.

### Diferença

**Margin → Espaço externo**

**Padding → Espaço interno**

#  Comentários

Comentários não aparecem na página.

```css
/* comentário */
```

# DevTools

Pode ser aberto com **F12** ou **Inspecionar**.

Permite testar:

- Fontes
- Tamanho
- Cor
- Bordas
- Espaçamentos
- Layout

Sem alterar o código original.

Depois basta copiar as alterações para o VS Code.

# Cores no CSS

## Nome

```css
blue
red
green
```
## RGB

```css
rgb(255,0,0)
```
## Hexadecimal

```css
#FF0000
```

No mercado de trabalho normalmente utilizam-se códigos **RGB** ou **Hexadecimal** enviados pelo designer.

