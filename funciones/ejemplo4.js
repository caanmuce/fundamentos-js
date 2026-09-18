const rl = require("readline-sync")
function promedio(nota){
    let suma = 0

    for (let i = 0; i < nota; i++){
        let notas = parseFloat(rl.question("ingrese la nota ", i + 1))
        if (!isNaN(notas)){
            suma = suma + notas
        } else {
            console.log('entrada no valida')
        }
    }
    console.log("promedio: ", (suma/nota).toFixed(2))
}

promedio(5)