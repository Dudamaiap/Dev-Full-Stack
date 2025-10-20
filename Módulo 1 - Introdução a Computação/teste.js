   function somaArray(array){
        return array.reduce(function(total,valor){
            return total + valor
        }, 0)
    }

    let numeros = [5,2,9,1,3]
    let resultado = somaArray(numeros)

    console.log("Soma dos elementos", resultado)