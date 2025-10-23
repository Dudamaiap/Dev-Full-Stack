   const livraria = [
        {titulo: "O grande Gatsby", autor: "Fitzgerald", ano: "1990"},
        {titulo: "A insustentável leveza do ser", autor: "Milan Kundera", ano: "2007" },
        {titulo: "Carta ao Pai", autor: "Franz Kafka", ano: "1999"},
        {titulo: "Os Miseráveis", autor: "Vitor Hugo", ano: "2020"},
    ]

    for(let livro of livraria ){
        if(livro.ano<2000){
            console.log(livro)
        }
    }