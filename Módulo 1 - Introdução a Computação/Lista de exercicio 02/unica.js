function palavrasUnicas(str) {
  const palavras = str.split(" ")
  const unicas = []
  for (let i = 0; i < palavras.length; i++) {
    let repetida = false
    for (let j = 0; j < palavras.length; j++) {
      if (i !== j && palavras[i] === palavras[j]) {
        repetida = true
      }
    }
    if (!repetida) {
      unicas.push(palavras[i])
    }
  }
  return unicas
}