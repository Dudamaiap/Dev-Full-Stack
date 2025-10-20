# Aula 08 - Vetores Multidimensionais em JavaScript

## O que são vetores multidimensionais?

Um **vetor multidimensional** é um **array que contém outros arrays** como elementos.

Na prática, eles funcionam como **tabelas de linhas e colunas** (no caso de duas dimensões) ou até estruturas mais complexas (três ou mais dimensões).

 Em resumo:

- **Array unidimensional:** lista linear → `[1, 2, 3]`
- **Array bidimensional (matriz):** tabela → `[[1, 2], [3, 4]]`
- **Array tridimensional:** cubo de dados → `[[[1], [2]], [[3], [4]]]`

---

![image.png](../Módulo%201%20-%20Introdução%20a%20Computação/img/array%20multidimensional.png)

## Criando um array bidimensional

```jsx
// Criando uma matriz 2x3 (2 linhas, 3 colunas)
const matriz = [
  [1, 2, 3],
  [4, 5, 6]
];

console.log(matriz);

```

Saída:

```
[
  [1, 2, 3],
  [4, 5, 6]
]

```

---

## Acessando elementos

Os elementos são acessados por **índices**, começando em 0.

```jsx
const matriz = [
  [10, 20, 30],
  [40, 50, 60]
];

console.log(matriz[0][1]); // 20 (linha 0, coluna 1)
console.log(matriz[1][2]); // 60 (linha 1, coluna 2)

```

---

## Modificando valores

```jsx
matriz[0][1] = 99;
console.log(matriz);
// [
//   [10, 99, 30],
//   [40, 50, 60]
// ]

```

---

## Percorrendo a matriz

### Usando `for`

```jsx
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    console.log(`Elemento [${i}][${j}] = ${matriz[i][j]}`);
  }
}

```

### Usando `for...of`

```jsx
for (const linha of matriz) {
  for (const valor of linha) {
    console.log(valor);
  }
}

```

---

## Exemplo prático: soma dos elementos

```jsx
let soma = 0;
for (const linha of matriz) {
  for (const valor of linha) {
    soma += valor;
  }
}
console.log("Soma total:", soma);

```

---

## Criando matrizes dinamicamente

Você pode criar uma matriz vazia e preencher com valores por meio de laços.

```jsx
const linhas = 3;
const colunas = 4;
const matriz = [];

for (let i = 0; i < linhas; i++) {
  matriz[i] = []; // Cria uma nova linha
  for (let j = 0; j < colunas; j++) {
    matriz[i][j] = i + j; // Exemplo de preenchimento
  }
}

console.table(matriz);

```

Saída (em forma de tabela):

```
0 1 2 3
1 2 3 4
2 3 4 5

```

```jsx
let matriz = {[10], [10]}

for(let i=0; i<matriz[i].lenght; i++){
		for(let j=0;  j<matriz[j].lenght; j++){
				console.log(matriz [i] [j])

		}
}

console.table(matriz)
```

### Exercício 01 

Crie um array chamado numeros contendo 10 valores numéricos inteiros de sua escolha. Em seguida, utilize métodos de array do JavaScript para realizar as seguintes operações:

Calcular a soma de todos os elementos do array.

Calcular a média dos elementos.

Criar um novo array chamado pares que contenha apenas os números pares do array original.

Imprimir no console:

O array original numeros

A soma dos elementos

A média dos elementos

O novo array contendo apenas os números pares (pares)

```javascript 

const numeros = [12, 5, 8, 21, 4, 18, 7, 10, 3, 6]

let soma = 0
let pares = []

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i]

  if (numeros[i] % 2 === 0) {
    pares.push(numeros[i])
  }
}

let media = soma / numeros.length;

console.table("Array original:", numeros)
console.log("Soma:", soma)
console.log("Média:", media)
console.table("Números pares:", pares)
```