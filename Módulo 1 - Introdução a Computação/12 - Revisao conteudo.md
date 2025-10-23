# Revisão do Conteúdo + Exercícios 

01. Verificar em uma lista de livros os que são publicados antes de 2000 

```javascript 
    
    const livraria = [
        {titulo: "O grande Gatsby", autor: "Fitzgerald", ano: "1990"},
        {titulo: "A insustentável leveza do ser", autor: "Milan Kundera", ano: "2007" },
        {titulo: "Carta ao Pai", autor: "Franz Kafka", ano: "1999"},
        {titulo: "Os Miseráveis", autor: "Vitor Hugo", ano: "2020"},
    ]

    for(let livro of livraria ){
        if(ano<2000){
            console.log(livro)
        }
    }

```

02. Contar a quantidade de filmes por gênero 

```javascript

    let filmes = [
        {titulo: "Senhor dos Anéis", genero:"Fantasia"},
        {titulo: "Ilha do medo", genero: "Pulp fiction"},
        {titulo: "Clube da luta", genero: "drama"},
        {titulo: "Jogo da imitação",  genero: "Historico"},
        {titulo: "Pulp fiction", genero: "Ação"},
        {titulo: "Poderoso chefão", genero: "Máfia"},
        {titulo: "Batman", genero "Herói"},
]

let contagemGenero = {}

    filmes.forEach(filme => {
        if(contagemGenero[filme.genero]){
            contagemGenero[filme.genero]++
            else{
                contagemGenero[filme.genero] = 1
            }
        }
});

console.table(contagemGenero)

for(let genero in contagemGenero){
    console.log('Existem ${contagemGenero[genero]} filme (s) do genero ${genero}')
}
```
03. Calcular o fatorial de um número 

```javascript 

    function calcularFatorial(numero){
        let fatorial = 1
        for(let i = 1; i<= numero; i++){
            fatorial = fatorial * i
        }

        console.log(fatorial)
    }

    calcularFatorial(5)
```

04. Imprima os dez primeiros números da sequência de Fibonacci

```javascript

    function fibonacci(){
        let a = 0, b = 1, temp
        console.log(a)
        console.log(b)

        for(let i = 3; i<=10; i++){
            temp = a + b
            console.log(temp)
            a = b
            b = temp
        }
    }

    fibonacci()

```