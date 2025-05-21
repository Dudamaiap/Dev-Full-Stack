# Aula 06 - Aula de Revisão e Exercícios Práticos 

## 01. Escreva um algoritmo para ler uma temperatura em gruas Clesius, calcular e escrever o valor correspondente em graus Fahrenheit

```javascript 
 const prompt = require('prompt-sync')()

let celsius = Number(prompt('Informe qual é a temperatura em Graus Celsius: '))

let farenheit = (9 / 5 * celsius) + 32

console.log(`${celsius}°C em Farenheit é ${farenheit}°F`)

```