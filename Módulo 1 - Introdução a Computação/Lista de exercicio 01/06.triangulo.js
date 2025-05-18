let A = parseFloat(prompt("Digite o lado A:"));
let B = parseFloat(prompt("Digite o lado B:"));
let C = parseFloat(prompt("Digite o lado C:"));

if (A < B + C && B < A + C && C < A + B) {
  if (A === B && B === C) {
    console.log("Triângulo Equilátero");
  } else if (A === B || A === C || B === C) {
    console.log("Triângulo Isósceles");
  } else {
    console.log("Triângulo Escaleno");
  }
} else {
  console.log("Não é um triângulo");
}
