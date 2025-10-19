# Aula 07 - Vetores Unidimensionais ou Arrays 

### 1. O que são Vetores (Arrays)?
Em programação, um vetor (ou array) é uma estrutura de dados que permite armazenar uma coleção de elementos em uma única variável. Pense nele como uma lista ordenada de itens, onde cada item tem uma posição específica, chamada de índice.

**Por que usar vetores?**

Imagine que você precisa armazenar as notas de 5 alunos. Sem vetores, você poderia criar 5 variáveis diferentes:

```javascript
let nota1 = 7.5;
let nota2 = 8.0;
let nota3 = 6.5;
let nota4 = 9.0;
let nota5 = 7.0;
```
Com um vetor, podemos armazenar todas as notas de forma organizada:

```javaScript

let notas = [7.5, 8.0, 6.5, 9.0, 7.0];
```

![Aula Array](../Módulo%201%20-%20Introdução%20a%20Computação/img/Captura%20de%20tela%20array.png)


### Exemplo:
```javascript
let frutas = ["maçã", "banana", "laranja"]
```

Claro! Aqui está o texto exatamente em **Markdown puro**, pronto para colar em um arquivo `.md` no VS Code, GitHub ou qualquer editor Markdown:


### 2. Declaração e Inicialização de Vetores

Existem algumas maneiras de criar um vetor em JavaScript:

**Forma literal (mais comum):**

```javascript
// Vetor de números
let numeros = [10, 20, 30, 40, 50];

// Vetor de strings (texto)
let nomes = ["Ana", "Bia", "Carlos"];

// Vetor com tipos de dados mistos
let informacoes = ["João", 30, true];

// Vetor vazio
let meuVetor = [];
```

---

### 3. Acessando e Modificando Elementos

Os elementos de um vetor são acessados através de seus **índices**. O primeiro elemento de um vetor está sempre no índice **0**.

```javascript
let frutas = ["Maçã", "Banana", "Laranja", "Uva"];

// Acessando o primeiro elemento (índice 0)
console.log(frutas[0]); // Saída: Maçã

// Acessando o terceiro elemento (índice 2)
console.log(frutas[2]); // Saída: Laranja

// Modificando o segundo elemento (índice 1)
frutas[1] = "Morango";
console.log(frutas); // Saída: ["Maçã", "Morango", "Laranja", "Uva"]
```

**Tamanho do Vetor (`.length`)**

A propriedade `.length` retorna o número de elementos em um vetor.

```javascript
let animais = ["Cachorro", "Gato", "Pássaro"];
console.log(animais.length); // Saída: 3
```

---

### 4. Percorrendo Vetores com Laços

A maneira mais comum de percorrer (ou iterar sobre) todos os elementos de um vetor é usando um laço `for`.

```javascript
let notas = [8.5, 7.0, 9.2, 6.8];

for (let i = 0; i < notas.length; i++) {
  console.log(`A nota do aluno ${i + 1} é: ${notas[i]}`);
}
```

---

### 5. Métodos Básicos de Manipulação

#### Adicionando Elementos

* `push()`: Adiciona um ou mais elementos ao **final** do vetor.
* `unshift()`: Adiciona um ou mais elementos ao **início** do vetor.

```javascript
let cores = ["vermelho", "verde"];

// Adicionando ao final
cores.push("azul");
console.log(cores); // Saída: ["vermelho", "verde", "azul"]

// Adicionando ao início
cores.unshift("amarelo");
console.log(cores); // Saída: ["amarelo", "vermelho", "verde", "azul"]
```

#### Removendo Elementos

* `pop()`: Remove o último elemento do vetor.
* `shift()`: Remove o primeiro elemento do vetor.

```javascript
let letras = ["a", "b", "c", "d"];

// Removendo o último elemento
let ultimaLetra = letras.pop();
console.log(letras); // Saída: ["a", "b", "c"]
console.log(ultimaLetra); // Saída: d

// Removendo o primeiro elemento
let primeiraLetra = letras.shift();
console.log(letras); // Saída: ["b", "c"]
console.log(primeiraLetra); // Saída: a
```

---

## 🛠️ Exemplos Práticos

### Exemplo 1: Calcular a Média de Notas

```javascript
let notasAlunos = [7, 8, 9, 10, 6];
let soma = 0;

for (let i = 0; i < notasAlunos.length; i++) {
  soma += notasAlunos[i];
}

let media = soma / notasAlunos.length;

console.log(`A média das notas é: ${media}`); // Saída: A média das notas é: 8
```

---

### Exemplo 2: Encontrar o Maior Número em um Vetor

```javascript
let numeros = [15, 7, 22, 41, 6];
let maiorNumero = numeros[0];

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maiorNumero) {
    maiorNumero = numeros[i];
  }
}

console.log(`O maior número é: ${maiorNumero}`); // Saída: O maior número é: 41
```

```

---

Quer que eu adicione uma seção final com **resumo e boas práticas** sobre vetores também? Isso deixaria o material mais completo para estudos.
```
