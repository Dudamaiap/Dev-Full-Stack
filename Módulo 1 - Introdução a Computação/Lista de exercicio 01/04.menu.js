console.log("Menu:\n1 - Bebidas\n2 - Entradas\n3 - Pratos principais");
let opcao = parseInt(prompt("Escolha uma opção (1 a 3):"));

switch(opcao) {
  case 1:
    console.log("Você escolheu Bebidas.");
    break;
  case 2:
    console.log("Você escolheu Entradas.");
    break;
  case 3:
    console.log("Você escolheu Pratos principais.");
    break;
  default:
    console.log("Opção inválida.");
}
