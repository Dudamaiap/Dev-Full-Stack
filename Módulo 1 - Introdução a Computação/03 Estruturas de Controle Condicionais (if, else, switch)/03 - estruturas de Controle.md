# Aula 03 - Estruturas de Controle (if, else, switch)

As **estruturas de controle** são usadas para tomar decisões e controlar o fluxo de execução do código com base em condições. Em JavaScript, as principais são:

---

## ✅ `if`

A instrução `if` executa um bloco de código **se uma condição for verdadeira**.


```javascript
let idade = 16;

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}
```
## 🔁 else
A cláusula else define um bloco de código a ser executado caso a condição do if seja falsa.


let idade = 16;

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}

## ➕ else if
Você pode testar múltiplas condições com else if.

```javascript
let nota = 75;

if (nota >= 90) {
  console.log("Nota A");
} else if (nota >= 70) {
  console.log("Nota B");
} else {
  console.log("Nota C ou inferior");
}
```
## 🔀 switch
O switch é usado para comparar uma variável a vários valores possíveis, tornando o código mais limpo quando há muitas comparações if-else.

```javascript
let fruta = "maçã";

switch (fruta) {
  case "maçã":
    console.log("Você escolheu maçã.");
    break;
  case "banana":
    console.log("Você escolheu banana.");
    break;
  default:
    console.log("Fruta não reconhecida.");
}
```
### Explicações :
case: define um possível valor a ser comparado.

break: impede que os outros casos abaixo sejam executados.

default: executado se nenhum case for correspondente.

## Usando entrada do usuário com prompt-sync
Para permitir que o usuário digite valores no terminal, usamos o pacote prompt-sync. Para instalá-lo, execute o seguinte comando no terminal:

```javascript
 npm intall prompt-sync
```
Depois, importe no seu código assim:

```javascript
const prompt = require('prompt-sync')()
```

## Exercício 01
Verifique se um número é par ou ímpar
```javascript
let num = 3;

if(num%2 == 0){
  console.log('O número é par.')
}else{
  console.log('O número é ímpar.')
}
```
### Exercício 02
Encontre o maior de três números
```javascript
let a = 3;
let b = 8;
let c = 12;
let maior;

if (a > b && a > c) {
  maior = a;
} else if (b > a && b > c) {
  maior = b;
} else {
  maior = c;
}

console.log('O maior número é ' + maior);
```
### Exercício 03
Calculadora simples (4 operações fundamentais) usando entrada do usuário.
```javascript
const prompt = require('prompt-sync')()

let a = Number(prompt('Insira o primeiro valor:'))
let b = Number(prompt('Insira o segundo valor:'))

console.log('Escolha uma operação');
console.log('----------------------');
console.log('[1] - Soma');
console.log('[2] - Subtração');
console.log('[3] - Multiplicação');
console.log('[4] - Divisão');
console.log('----------------------');

let operacao = Number(prompt('Informe a operação desejada:'))
let resultado

if (operacao === 1) {
    resultado = a + b;
    console.log(`Soma: ${a} + ${b} = ${resultado}`)
} else if (operacao === 2) {
    resultado = a - b
    console.log(`Subtração: ${a} - ${b} = ${resultado}`)
} else if (operacao === 3) {
    resultado = a * b
    console.log(`Multiplicação: ${a} * ${b} = ${resultado}`)
} else if (operacao === 4) {
    if (b !== 0) {
        resultado = a / b
        console.log(`Divisão: ${a} / ${b} = ${resultado}`)
    } else {
        console.log('Erro: divisão por zero.')
    }
} else {
    console.log('Operação inválida.')
}
```
### Alternativa com switch no exercício 3
```javascript
const prompt = require('prompt-sync')();

let a = Number(prompt('Insira o primeiro valor: '));
let b = Number(prompt('Insira o segundo valor: '));

console.log('Escolha uma operação');
console.log('----------------------');
console.log('[1] - Soma');
console.log('[2] - Subtração');
console.log('[3] - Multiplicação');
console.log('[4] - Divisão');
console.log('----------------------');

let operacao = Number(prompt('Informe a operação desejada: '));
let resultado;

switch (operacao) {
  case 1:
    resultado = a + b;
    console.log(`Soma: ${a} + ${b} = ${resultado}`);
    break;
  case 2:
    resultado = a - b;
    console.log(`Subtração: ${a} - ${b} = ${resultado}`);
    break;
  case 3:
    resultado = a * b;
    console.log(`Multiplicação: ${a} * ${b} = ${resultado}`);
    break;
  case 4:
    if (b !== 0) {
      resultado = a / b;
      console.log(`Divisão: ${a} / ${b} = ${resultado}`);
    } else {
      console.log('Erro: divisão por zero.');
    }
    break;
  default:
    console.log('Operação inválida.');
}
```