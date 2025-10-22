# Principais Funções Nativas no JS


## 1. Funções Avançadas: Strings

Em JavaScript, strings são valores primitivos, mas ao serem interpretadas, o JS as trata como objetos, permitindo o uso de propriedades e métodos.

Exemplos:

### Tamanho da string

```javascript
console.log('Jaques Hyago'.length); // 12
```


### Caractere em uma posição específica
```javascript
console.log('Jaques Hyago'.charAt(7)); // H
```

### Índice do primeiro caractere

```javascript
let name = 'Jaques Hyago';
console.log(name.indexOf('H')); // 7
```

### Substituir texto

```javascript
console.log(name.replace('Jaques Hyago', 'Hyago Jaques')); //Hyago Jaques
```

### Extrair substring

```javascript
console.log(name.substr(7, 5)); // Hyago
```

### Converter para maiúsculas ou minúsculas
```javascript
console.log(name.toUpperCase()); // JAQUES HYAGO
console.log(name.toLowerCase()); // jaques hyago
```

### Remover espaços das extremidades

```javascript
console.log('-' + name.trim() + '-'); // -Jaques Hyago-
```

## 2. Funções Avançadas: Matemática

O objeto Math oferece métodos para realizar cálculos e arredondamentos.

Exemplos:

### Arredondar para cima

```javascript
console.log(Math.ceil(10.380)); // 11
```

### Arredondar para baixo
```javascript
console.log(Math.floor(10.380)); // 10
```

### Arredondar com base na média
```javascript
console.log(Math.round(10.380)); // 10
```

### Número aleatório entre 0 e 1
```javascript
console.log(Math.random());
```

## 3. Funções Avançadas: Datas

O objeto Date permite criar e manipular datas. Todas as datas são baseadas no sistema operacional.

Exemplos:

### Data atual

```javascript
let date = new Date();
console.log(date.getDate());       // Dia
console.log(date.getMonth() + 1);  // Mês (0 a 11)
console.log(date.getFullYear());   // Ano
```

### Adicionar ou remover dias, meses e anos

```javascript
date.setDate(date.getDate() + 720);   // +720 dias
date.setMonth(date.getMonth() + 1);   // +1 mês
date.setFullYear(date.getFullYear() + 1); // +1 ano
console.log(date.toString());
```

### Datas específicas

```javascript
let date1 = new Date(2017, 0, 15); // 15/01/2017
let date2 = new Date(2017, 1, 23); // 23/02/2017
console.log(date1.toString());
console.log(date2.toString());
```

### Converter datas em milissegundos

console.log(date1.getTime());
console.log(date2.getTime());


### Diferença entre datas

```javascript
let milliseconds_between_dates = Math.abs(date1.getTime() - date2.getTime());
let milliseconds_per_day = 24 * 60 * 60 * 1000; // 1 dia em ms
console.log('Diferença em dias: ' + Math.ceil(milliseconds_between_dates / milliseconds_per_day));
```