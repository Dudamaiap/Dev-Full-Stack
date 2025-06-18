# Aula 08 - Bubble Sort e Arrays Bidimensionais

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