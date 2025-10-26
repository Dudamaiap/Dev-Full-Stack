function nomesPorPreco(produtos) {
  return produtos
    .sort((a, b) => a.preco - b.preco)
    .map(p => p.nome);
}

const produtos = [
  { nome: "Teclado", preco: 120 },
  { nome: "Mouse", preco: 80 },
  { nome: "Monitor", preco: 600 }
];

console.log(nomesPorPreco(produtos)); 
