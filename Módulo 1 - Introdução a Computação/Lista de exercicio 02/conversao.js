function paresParaObjeto(pares) {
  const obj = {};
  for (let [chave, valor] of pares) {
    obj[chave] = valor;
  }
  return obj;
}

function objetoParaPares(obj) {
  const pares = [];
  for (let chave in obj) {
    pares.push([chave, obj[chave]]);
  }
  return pares;
}

const pares = [["nome", "Maria"], ["idade", 21]];
const obj = paresParaObjeto(pares);
console.log(obj); 

console.log(objetoParaPares(obj)); 
