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
    movies.forEach(element => {
        console.log(element)
    });
```
