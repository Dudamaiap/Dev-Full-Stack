# Recursividades e TADs

01. Calcular fatorial usando recursividade 

```javascript 

    function fatorial(n){
        if(n == 0 ){
            return 1
        } else {
            return n * fatorial(n - 1)
        }
    }

    console.log(fatorial(5))
```

02. Soma usando recursividade

```javascript

    function soma(n){
        if(n == 1 ){
            return 1
        } else {
            return n + soma(n-1)
        }
    }

    console.log(soma)
```

03. Fibonacci recursivo 

```javascript
    function fibonacci(n){
        if(n < 2){
            return n
        }
        return fibonacci (n-1) + fibonacci(n-2)

    }
    console.log(fibonacci(10))
```

## TADs

### Pilha de Chamadas - Call Stack

Uma pilha é uma estrutura de dados que segue o princípio LIFO (Last In, First Out) — ou seja, o último elemento que entra é o primeiro a sair.

![Pilha](../Módulo%201%20-%20Introdução%20a%20Computação/img/Pilha.png)

### Operações Principais 
``push()`` → adiciona um elemento ao topo da pilha.

``pop()`` → remove o elemento do topo da pilha.

``peek()`` (ou ``top()``) → consulta o elemento que está no topo, sem removê-lo.

``isEmpty()`` → verifica se a pilha está vazia.


### 