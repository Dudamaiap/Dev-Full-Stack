# Aula de HTML — Formulários e Inputs: Captura de Dados do Usuário

## Explicação das Tags e Estilos Utilizados

### Estrutura do Documento

```html
<!DOCTYPE html>
<html lang="en">
```
``<!DOCTYPE html>``: Define o documento como HTML5.

``<html lang="en">``: Tag raiz do HTML, lang="en" define o idioma da página.

```HTML
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width= , initial-scale=1.0">
    <title>Formulários em HTML</title>
    <style> ... </style>
</head>
```
``<head>``: Contém metadados e informações da página.

``<meta charset="UTF-8">``: Define a codificação de caracteres (acentos e símbolos).

``<meta name="viewport" content="width= , initial-scale=1.0">``: Torna a página responsiva em dispositivos móveis.

``<title>``: Define o título da página exibido na aba do navegador.

``<style>``: Contém o CSS para estilização do formulário e elementos da página.

### CSS Aplicado
```CSS
body {
    font-family: Patrick Hand, cursive;
    margin: 0;
    padding: 20px;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
}
```
``font-family``: Define a fonte da página.

``margin e padding``: Controlam espaços internos e externos.

``background-color``: Define a cor de fundo.

``display: flex + justify-content``: center: Centraliza o formulário horizontalmente.

```css
#form-container {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.8);
}
```
``#form-container``: Container que envolve o formulário.

``background-color``: Cor branca para destacar o formulário.

``padding``: Espaçamento interno.

``border-radius``: Bordas arredondadas.

``box-shadow``: Sombra para efeito de profundidade.

```css
h2{
    text-align: center;
    color: #333;
    font-size: 24px;
}
```
Centraliza o título do formulário e define cor e tamanho da fonte.

```css
label {
    display: block;
    margin-top: 8px;
    color: #555;
}
```
``display``: block: Cada label fica em linha própria.

``margin-top``: Espaço acima da label.

``color``: Cor do texto da label.

```css
input[type="text"], input[type="email"], input[type="password"], select, textarea {
    width: 90%;
    margin-bottom: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}
```
Define largura, borda, arredondamento e tamanho da fonte para campos de texto, email, senha, selects e textarea.

``margin-bottom``: Espaço abaixo de cada campo.

```css
button {
    background-color: #28a745;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    width: 100%;
}
```
Estiliza o botão de envio: cor verde, texto branco, bordas arredondadas, ocupa toda a largura e muda o cursor para indicar interatividade.

### Estrutura do Formulário
```html
<div id="form-container">
    <h2>Cadastro do usuário</h2>
    <form>
        ...
    </form>
</div>
```

``<div>``: Container para estilizar e organizar o formulário.

``<h2>``: Título do formulário.

``<form>``: Elemento que agrupa todos os campos para envio de dados.

### Campos de Input e Elementos de Captura
#### Nome completo

```html
<label>Nome completo:</label>
<input type="text" placeholder="Digite seu nome completo:">
```
``<label>``: Rótulo do campo.

``<input type="text">``: Campo de texto.

``placeholder``: Texto guia dentro do campo.

#### Email

```html
<input type="email" placeholder="Digite seu email:">
```
Valida automaticamente o formato de e-mail.

#### Senha

```html
<input type="password" placeholder="Digite sua senha:">
```
Oculta os caracteres digitados.

#### Gênero

```html
<input type="radio" value="male" name="gender">Masculino
<input type="radio" value="female" name="gender">Feminino
<input type="radio" value="other" name="gender">Outro
```
``type="radio"``: Permite seleção única.

``name="gender"``: Agrupa opções.

``value``: Valor enviado ao servidor ao selecionar.

#### Aceite de termos

```html
<input type="checkbox" name="terms" required> Aceito os termos e condições
```
``type="checkbox"``: Permite seleção.

``required``: Torna obrigatório marcar antes de enviar.

#### Cidade

```html
<select name="city">
    <option value="rs">Jaguarão</option>
    ...
</select>
```
``<select>``: Menu suspenso.

``<option>``: Cada opção disponível.

``value``: Valor enviado ao servidor.

#### Mensagem

```html
<textarea name="message" rows="4" placeholder="Deixe uma mensagem"></textarea>
```
Área de texto maior para informações adicionais.

``rows``: Define altura.

``placeholder``: Texto guia.

#### Botão de envio

```html
<button type="submit">Cadastrar</button>
```
``type="submit"``: Envia o formulário quando clicado.

