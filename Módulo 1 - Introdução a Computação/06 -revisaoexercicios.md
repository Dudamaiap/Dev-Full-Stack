# Aula 06 - Aula de Revisão e Exercícios Práticos 

## 01. Escreva um algoritmo para ler uma temperatura em gruas Clesius, calcular e escrever o valor correspondente em graus Fahrenheit

```javascript 
 const prompt = require('prompt-sync')()

let celsius = Number(prompt('Informe qual é a temperatura em Graus Celsius: '))

let farenheit = (9 / 5 * celsius) + 32

console.log(`${celsius}°C em Farenheit é ${farenheit}°F`)

```
## 02. Escreva um algoritmo para ler o número de elitores de um município, o número de votos brancos, nulos e válidos. Caluclar e escrever o percentual que cada um representa em relação ao total de eleitores. 

```javascript
const prompt = require('prompt-sync')()

let eleitores = Number(prompt('Informe o número de eleitores: '))
let branco = Number(prompt('Informe o número de votos em branco: '))
let nulos = Number(prompt('Informe o número de votos nulos: '))
let  validos = Number(prompt('Informe o número de votos válidos: '))

branco = (branco/eleitores)*100
nulos = (nulos/eleitores)*100
validos = (validos/eleitores)*100

console.log(`O percentual de votos brancos é de ${branco}`)
console.log(`O percentual de votos nulos é de ${nulos}`)
console.log(`O percentual de votos validos é de ${validos}!`)
```

## 03. A turma C é composta de 60 alunos e a turma D de 20 alunos. Escreva um algoritmo que leia o percentual de alunos reprovados na turma C, o percentual de aprovados na turma D, calcule e escreva:
a) O número de alunos reprovados na turma C

b) O número de alunos reprovados na turma D

c) A porcentagem de alunos reprovados em relação ao total de alunos das duas turmas.

```javascript 
const prompt = require('prompt-sync')()

let totalturmaC = 60
let totalturmaD = 20
let percReprovC = Number(prompt('Informe o percentual de reprovação da Turma C: '))
let percAprovD = Number(prompt('Informe o percentual de aprovação da Turma D: '))

//a) O número de alunos reprovados na turma C
let totalAlunos = totalturmaC + totalturmaD

//b) O número de alunos reprovados na turma D
let reprovadosC = (percReprovC/100)*totalturmaC
let reprovadosD = ((100 - percAprovD) / 100) * totalturmaD

//c) A porcentagem de alunos reprovados em relação ao total de alunos das duas turmas.
let totalReprovados = reprovadosC+reprovadosD
let percTotalReprovados = (totalReprovados/totalAlunos)*100

console.log(`a) Número de reprovados na turma C: ${reprovadosC}`)
console.log(`b) Número de reprovados na turma D: ${reprovadosD}`)
console.log(`c) Porcentagem total de reprovados: ${percTotalReprovados.toFixed(2)}%`)
```

## 04. Faça um 