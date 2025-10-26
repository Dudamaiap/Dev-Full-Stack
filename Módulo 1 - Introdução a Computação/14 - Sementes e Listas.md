# Listas Encadeadas

## O que é uma Lista Simplesmente Encadeada?
Uma lista simplesmente encadeada (ou lista ligada) é uma estrutura de dados linear composta por uma sequência de nós. Diferente de Arrays, os elementos não são armazenados em locais de memória contíguos.

Cada nó na lista possui duas partes:
1. Dados (Valor): O valor que queremos armazenar (um número, string, objeto, etc.).
2. Ponteiro (Próximo): Uma referência (ou "ponteiro") para o próximo nó na sequência.O último nó da lista aponta para null, indicando o fim da sequência. A lista em si mantém uma referência apenas para o primeiro nó, comumente chamado de head (cabeça).

## Implementação em JavaScript
Para implementar uma lista encadeada, geralmente criamos duas classes:
- Node: Representa cada elemento (nó) na lista.
- SinglyLinkedList: Representa a lista como um todo, gerenciando os nós e as operações.

### 1. A Classe Node (Nó)
O nó é a estrutura básica. Ele armazena o valor e a referência para o próximo nó.

```JavaScript
class Node {
  /**
   * Cria um novo nó.
   * @param {*} val - O valor a ser armazenado no nó.
   */
  constructor(val) {
    this.val = val;      // O dado armazenado
    this.next = null;  // A referência para o próximo nó (inicialmente nula)
  }
}
```

2. A Classe SinglyLinkedList (Lista Encadeada)
Esta classe gerencia a lista. Ela armazena a head (cabeça), a tail (cauda) e o length (comprimento) da lista, além de conter os métodos para manipulação.

```JavaScript
class SinglyLinkedList {
  constructor() {
    this.head = null;    // Ponteiro para o primeiro nó (início)
    this.tail = null;    // Ponteiro para o último nó (fim)
    this.length = 0;   // Quantidade de nós na lista
  }
  
  // ... métodos da lista virão aqui ...
}
```