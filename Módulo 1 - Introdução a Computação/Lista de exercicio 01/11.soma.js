let soma = 0;

for (let i = 0; i < 5; i++) {
  let num = parseFloat(prompt(`Digite o ${i + 1}º número:`));
  soma += num;
}

console.log(`Soma total: ${soma}`);
