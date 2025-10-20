# Aula 09 - Funções em Javascript: Definição e Chamada 

### Revisão Arrays 

```javascript 
    let listaCoisas = Array()

    listaCoisas['Hardware'] [0] = 'Placa de Vídeo'
    listaCoisas['Hardware'] [1] = 'Notebook'
    
    console.table(listaCoisas)
```
Resultado:
| index     | 0               | 1             |
|------------|-----------------|---------------|
| hardware   | Placa de vídeo  | Notebook      |
| filmes     | Senhor dos Anéis | Harry Potter  |

## O que é um função
Uma **função** é um **bloco de código reutilizável** que executa uma tarefa específica.  
Você pode **definir** uma vez e **chamar** várias vezes quando precisar.
```javascript 
    function parOuImpar(){
        let resultado
        valor % 2 == 0 ? resultado = 'PAR':
        resultado = 'IMPAR'

    }

```
O ? : é o operador ternário do JavaScript — uma forma curta de escrever um if...else.

Estrutura:  condição ? valorSeVerdadeiro : valorSeFalso

Se o número for par, resultado recebe 'PAR'; senão, 'IMPAR'.

```javascript 
    function parOuImpar(valor){
        let resultado
        if (valor % 2 == 0) {
            resultado = 'PAR'
        } else {
            resultado = 'IMPAR'
            }

        return resultado
    }

    let verificarParOuImpar = parOuImpar(8)

    console.log(verificarParOuImpar)

```

## Passagem por Valor ou Referência 

Quando enviamos algo para uma função, o JavaScript pode copiar o valor ou passar a referência dependendo do tipo de dado.

### Passagem por Valor
```javascript
function mudarNumero(num) {
  num = 10;
}

let x = 5;
mudarNumero(x);
console.log(x); // 5
```

**O que aconteceu:**

Quando chamamos mudarNumero(x), o valor de x (que é 5) foi copiado e enviado para a função.

Dentro da função, a variável num recebeu uma cópia de 5.

A função mudou o valor dessa cópia para 10, mas o x original continuou igual.

Resumindo: Cada variável tem seu próprio valor guardado.
 A função não altera o original.

### Passagem por Referência

```javascript
function mudarNumero(obj) {
  obj.valor = 10;
}

let x = { valor: 5 };
mudarNumero(x);
console.log(x.valor); // 10
```

**O que aconteceu:**

Quando chamamos mudarNumero(x), o que foi passado não foi uma cópia do objeto, e sim um link (referência) para o mesmo objeto na memória.

Dentro da função, obj aponta pro mesmo lugar que x.

Então, quando a função altera obj.valor, ela está mexendo no mesmo objeto que x aponta.

### Exercício 

01. Crie uma função que retorna um array ordenado 

```javascript 
function ordenarArray(arr) {
  return arr.sort((a, b) => a - b);
}

let numeros = [5, 2, 9, 1, 5, 6];
let numerosOrdenados = ordenarArray(numeros);
console.log(numerosOrdenados); 
```
 
02. Crie uma função que retorne a soma dos valores de um array

```javascript 
    function somaArray(array){
        return array.reduce(function(total,valor){
            return total + valor
        }, 0)
    }

    let numeros = [5,2,9,1,3]
    let resultado = somarArray(numeros)

    console.log("Soma dos elementos", resultado)
```

03. Crie uma função que retorne o maior número 

```javascript
function maior(numero){
    let maior = array[0]

    for(let i=0; i < array.length; i++){
        if(array[i] > maior){
            maior = array[i]
        }
    }
    return maior
    
    }
console.log(maior([2, 3, 6, 7, 10, 1])) // 10
```