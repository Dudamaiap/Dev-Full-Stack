# Aula 05 - Estruturas de Controle: Laços de Repetição (for,while, do...while)

Os **laços de repetição** (ou loops) são usados para repetir um bloco de código várias vezes, até que uma condição seja satisfeita. 


## 🔁 for

O `for` é usado quando sabemos **quantas vezes** queremos repetir uma ação.

```javascript
for (let i = 1; i <= 5; i++) {
  console.log('Contando: ${i}');
}
```
**Explicação:**

```let i = 1``` → inicia a variável de controle.

```i <= 5``` → condição de repetição.

```i++``` → incremento após cada repetição.

## 🔁 while
O while é usado quando não sabemos exatamente o número de repetições, mas temos uma condição que deve ser verdadeira para continuar.

```javascript
let i = 1;

while (i <= 5) {
  console.log('Contando: ${i}');
  i++;
}
```
⚠️ Cuidado com loops infinitos! Sempre atualize a variável dentro do laço.

## 🔁 do...while
O do...while executa o bloco pelo menos uma vez, e depois repete enquanto a condição for verdadeira.

```javascript
let i = 1;

do {
  console.log('Contando: ${i}');
  i++;
} while (i <= 5);
```
A diferença para o while é que aqui o bloco será executado antes da verificação da condição.

## Exercício 01
Implementar a tabuada de algum número utilizando o while
```javascript
let i = 1

while(i<=10){
    console.log(i*9)
    i++
}
```

