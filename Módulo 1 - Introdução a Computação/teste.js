// Criação do array com 10 números
const numeros = [12, 5, 8, 21, 4, 18, 7, 10, 3, 6];

// Cálculo da soma com reduce
const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

// Cálculo da média
const media = soma / numeros.length;

// Filtragem dos números pares
const pares = numeros.filter(numero => numero % 2 === 0);

// Impressão dos resultados
console.log("Array original:")
console.table(numeros)
console.log("Soma:", soma)
console.log("Média:", media)
console.log("Números pares:")
console.table(pares)