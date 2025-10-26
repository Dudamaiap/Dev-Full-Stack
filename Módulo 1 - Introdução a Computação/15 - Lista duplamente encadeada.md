# Lista Duplamente Encadeada

## O que é uma Lista Duplamente Encadeada?
Uma lista duplamente encadeada é uma estrutura de dados linear, similar à lista simplesmente encadeada, mas com uma adição crucial: cada nó possui dois ponteiros.

Cada nó na lista possui três partes:

1. Dados (Valor): O valor que queremos armazenar.

2. Ponteiro next (Próximo): Uma referência para o próximo nó na sequência.

3. Ponteiro prev (Anterior): Uma referência para o nó anterior na sequência.

A lista mantém referências para o primeiro nó (head) e para o último nó (tail).

O prev do head (cabeça) aponta para null.

O next do tail (cauda) aponta para null.

Essa estrutura de ponteiro duplo permite a travessia bidirecional (para frente e para trás) da lista.

## Implementação em JavaScript
Assim como na lista simples, criamos duas classes.

1. A Classe Node (Nó)
O nó agora inclui a referência prev.

```JavaScript

class Node {
  /**
   * Cria um novo nó.
   * @param {*} val - O valor a ser armazenado no nó.
   */
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null; // A grande diferença!
  }
}
```
2. A Classe DoublyLinkedList (Lista Duplamente Encadeada)
A classe principal que gerencia a lista.

```JavaScript

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  
  // ... métodos ...
}
```