
# Objetos em JavaScript: Criação e Manipulação

## 1. O que são Objetos em JavaScript?

Em JavaScript, um **objeto** é a principal forma de organizar dados complexos. É essencialmente uma **coleção desordenada de pares chave-valor**.

- **Chave (Key):** É sempre uma string (ou um Symbol) que funciona como o **identificador único** da propriedade.
- **Valor (Value):** Pode ser **qualquer tipo de dado** em JavaScript: um número, uma string, um array, uma função (neste caso, é chamado de **método**), ou até mesmo outro objeto.

Objetos permitem que você agrupe dados e funcionalidades relacionadas, criando estruturas lógicas e acessíveis.


## 2. Criando Objetos e Definindo Métodos

### 2.1. Sintaxe Literal (Mais Comum)

Esta é a maneira mais simples e direta de criar um único objeto.

**Exemplo 1: Objeto simples com um Método**
Neste exemplo, `getSummary` é um **método** (uma função armazenada como valor).

```javascript
let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    
    // Método para retornar um resumo
    getSummary: function () {
        // 'this' refere-se ao próprio objeto 'book'
        return `${this.title} foi escrito por ${this.author} em ${this.year}.`;
    }
};

console.log(book.title);         // "The Great Gatsby"
console.log(book.getSummary());  // "The Great Gatsby foi escrito..."
````

**Conceito-Chave: O `this`**
Dentro de um método, `this` **refere-se ao objeto atual**, permitindo que você acesse suas outras propriedades e métodos.

---

### 2.2. Sintaxe de Método Abreviada (ES6+)

O padrão moderno (ES6) permite omitir a sintaxe `chave: function()`.

```javascript
let car = {
    brand: 'Honda',
    model: 'Civic',
    year: 2022,
    
    displayInfo() {
        console.log(`Marca: ${this.brand}, Modelo: ${this.model}, Ano: ${this.year}`);
    }
};
car.displayInfo();
```

---

### 2.3. Omissão de Chave (Property Shorthand - ES6+)

```javascript
let manufacturer = 'Ford';
let year = 2023;

let vehicle = {
    manufacturer, 
    year, 
    displayDetails() {
        console.log(`${this.manufacturer}, Ano: ${this.year}`);
    }
};
vehicle.displayDetails();
```

---

### 2.4. Mutabilidade: Adição Dinâmica de Propriedades

Objetos em JavaScript são **mutáveis** — você pode adicionar, modificar ou remover propriedades a qualquer momento.

```javascript
let athlete = { name: 'Serena Williams', sport: 'Tennis' };
athlete.country = 'USA'; 
athlete.celebrateVictory = () => console.log('Victory!');
athlete.celebrateVictory();
```

---

### 2.5. Objetos são passados por referência

```javascript
let config = { userId: 101, setting: 'Dark Mode' };
let anotherConfig = config; 
anotherConfig.setting = 'Light Mode';
console.log(config.setting); // Light Mode
```

---

## 3. Funções para Criar Múltiplos Objetos

### 3.1. Função Construtora

```javascript
function Laptop(brand, processor, ram) {
    this.brand = brand;
    this.processor = processor;
    this.ram = ram;
    this.turnOn = function () {
        console.log(`${this.brand} laptop está ligado.`);
    };
}

let myLaptop = new Laptop('Apple', 'M1', '16GB');
myLaptop.turnOn();
```

---

### 3.2. Factory Function

```javascript
function createSmartphone(brand, storage) {
    return {
        brand,
        storage,
        powerOn() { console.log(`${this.brand} smartphone está ligado.`); }
    };
}

let myPhone = createSmartphone('Google', '256GB');
myPhone.powerOn();
```

---

## 4. Iteração: Percorrendo Objetos e Arrays

### 4.1. `for...in` (para Objetos)

```javascript
const person = { name: "Alice", age: 28 };
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
```

### 4.2. `for...of` (para Iteráveis)

```javascript
const fruits = ["Apple", "Banana", "Cherry"];
for (let fruit of fruits) {
    console.log(fruit);
}
```

### 4.3. `.forEach()`

```javascript
const numbers = [10, 20, 30];
numbers.forEach((number, index) => console.log(`Índice ${index}: ${number}`));
```

---

## 5. Programação Orientada a Objetos (POO) com Classes

### 5.1. Classes e Objetos

```javascript
class Animal {
    constructor(nome, especie) {
        this.nome = nome;
        this.especie = especie;
    }

    fazerBarulho() {
        console.log(`${this.nome} está fazendo um barulho.`);
    }
}

let cachorro = new Animal("Rex", "Cachorro");
let gato = new Animal("Miau", "Gato");

class Veterinario {
    examinar(animal) {
        console.log(`Examinando o(a) ${animal.nome} da espécie ${animal.especie}.`);
        animal.fazerBarulho();
    }
}

let drJohn = new Veterinario();
drJohn.examinar(cachorro);
```

---

### 5.2. Método Construtor (`constructor`)

```javascript
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}
```

---

### 5.3. Encapsulamento

```javascript
class ContaBancaria {
    #saldo = 0;

    constructor(valorInicial) {
        this.#saldo = valorInicial;
    }

    getSaldo() {
        return this.#saldo;
    }
    
    depositar(valor) {
        if (valor > 0) this.#saldo += valor;
    }
}
```

---

### 5.4. Herança (`extends` e `super`)

```javascript
class Animal {
    constructor(nome) { this.nome = nome; }
    mover() { console.log("O animal se move."); }
}

class Cachorro extends Animal {
    constructor(nome, raca) {
        super(nome);
        this.raca = raca;
    }

    latir() {
        console.log(`${this.nome} (${this.raca}) está latindo!`);
    }

    mover() {
        super.mover();
        console.log("...e corre rapidamente.");
    }
}

let labrador = new Cachorro("Bobby", "Labrador");
labrador.latir();
labrador.mover();
```

---

### 5.5. Polimorfismo

O mesmo método (`mover`) se comporta de forma diferente dependendo da classe (`Animal` ou `Cachorro`).

---

### 5.6. Sobrescrita e Sobrecarga

* **Sobrescrita (Override):** redefinição de método herdado.
* **Sobrecarga (Overload):** não é suportada nativamente, mas pode ser simulada.

---

### 5.7. Classes e Métodos Abstratos

```javascript
class FormaGeometrica {
    constructor() {
        if (new.target === FormaGeometrica) {
            throw new Error("Classe abstrata não pode ser instanciada.");
        }
    }

    calcularArea() {
        throw new Error("Método 'calcularArea()' deve ser implementado.");
    }
}
```

---

## 6. Princípios de Design: Coesão e Acoplamento

### 6.1. Coesão (Cohesion)

* Mede o quão **relacionadas** e **focadas** são as responsabilidades de uma classe.
* **Alta Coesão:** uma classe faz uma coisa e a faz bem.

### 6.2. Acoplamento (Coupling)

* Mede o nível de **dependência** entre classes.
* **Baixo Acoplamento:** as classes devem ser independentes, facilitando manutenção e testes.

| Princípio       | O que buscar | Por que                                                           |
| :-------------- | :----------- | :---------------------------------------------------------------- |
| **Coesão**      | **Alta**     | Classes são focadas, claras e fáceis de entender.                 |
| **Acoplamento** | **Baixo**    | Classes são independentes, facilitando manutenção e reutilização. |

