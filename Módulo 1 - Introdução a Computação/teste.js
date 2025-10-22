function maior(numero){
    let maior = array[0]

    for(let i=0; i < array.length; i++){
        if(array[i] > maior){
            maior = array[i]
        }
    }
    return maior
    
    }
console.log(maior([2, 3, 6, 7, 10, 1])) // 10
