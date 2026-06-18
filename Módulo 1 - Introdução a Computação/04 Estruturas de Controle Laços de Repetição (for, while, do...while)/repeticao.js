// SWITCH

let dia = new Date()
let diaSemana = dia.getDay()
/*
    0 - Domingo
    1 - Segunda
    2 - Terça
    3 - Quarta
    4 - Quinta
    5 - Sexta
    6 - Sabado
*/

switch(diaSemana){
    case 0:
        console.log("Domingo")
        break
    case 1:
        console.log("Segunda")
        break
    case 2:
        console.log("Terça")
        break
    case 3:
        console.log("Quarta")
        break
    case 4:
        console.log("Quinta")
        break
    case 5:
        console.log("Sexta")
        break
    case 6:
        console.log("Sabado")
        break
    default:
        console.log("Valor invalido")
        break
}

// if else 
/*se(codição == verdade){
    faça tal coisa    
}
*/
let media = 11
let autorizacao = 'sim'

if (autorizacao == 'sim'){
    console.log("Pode entrar")
}


if(media >= 6){
    console.log("Aprovado!")
    if(media == 10){
        console.log("Conceito é A")
    }else if(media >= 8 && media <10){
        console.log("Conceito é B")
    }
}else if(media < 6){
    console.log("Reprovado!")
}