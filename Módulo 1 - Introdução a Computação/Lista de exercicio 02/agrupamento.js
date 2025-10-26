function agruparVendas(vendas) {
  return vendas.reduce((acc, venda) => {
    if (!acc[venda.cliente]) acc[venda.cliente] = 0;
    acc[venda.cliente] += venda.total;
    return acc;
  }, {});
}

const vendas = [
  { cliente: "Ana", total: 50 },
  { cliente: "João", total: 100 },
  { cliente: "Ana", total: 70 }
];

console.log(agruparVendas(vendas)); 
