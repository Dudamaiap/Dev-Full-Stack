let quantidade = parseInt(prompt("Quantas maçãs você comprou?"));

let preco = quantidade < 12 ? 0.30 : 0.25;
let total = quantidade * preco;

console.log(`Valor total: R$ ${total.toFixed(2)}`);
