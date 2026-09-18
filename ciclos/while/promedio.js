const rl = require ('readline-sync')

let num = parseFloat(rl.question("ingrese un numero positivo: "))
let suma  = 0;
let contador = 0;

while (num >= 0){
    suma = suma + num;
    contador++;
    num = parseFloat(rl.question("ingrese otro numero: "))
}

console.log (`el promedio de los numeros ingresados es: ${(suma / contador)}`);

