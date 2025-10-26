function jogoAdivinhacao() {
  const numero = Math.floor(Math.random() * 100) + 1
  let tentativa
  let tentativas = 0
  while (true) {
    tentativa = parseInt(prompt("Adivinhe o número de 1 a 100:"))
    tentativas++
    if (tentativa === numero) {
      alert(`Acertou! O número era ${numero}. Tentativas: ${tentativas}`)
      break
    } else if (tentativa < numero) {
      alert("Mais alto!")
    } else {
      alert("Mais baixo!")
    }
  }
}