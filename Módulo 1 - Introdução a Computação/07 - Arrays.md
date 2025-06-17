# Aula 07 - Vetores Unidimensionais ou Arrays 

 ## O que é um array?

Um array é uma **lista de valores**. Você pode guardar vários dados em uma variável só.

### Exemplo:
```javascript
let frutas = ["maçã", "banana", "laranja"]
```

### Como acessar os valores?
Usamos os índices (posições da lista), que começam do zero.

```javascript
console.log(frutas[0]); // mostra "maçã"
console.log(frutas[2]); // mostra "laranja"
```

Para percorrer o Array 
 ```javascript
 for(let i = 0; i < frutas.lenght; i++){
    console.table(frutas[i]) //.table é para mostrar em formato de tabela no console
 }

 ```