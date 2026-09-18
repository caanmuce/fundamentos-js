const rl = require("readline-sync")

let nombre = rl.question("ingrese su nombre: ");
let apellido = rl.question("ingrese su apellido: ");
let edad = parseInt(rl.question("ingrese su edad: "));
let estatura = parseFloat(rl.question("ingrese su estatura: "));
let presenteTexto = rl.question("escribe true o false: ");

let presente = (presenteTexto.toLowerCase() === "true");

console.log("Nombre: " +nombre)
console.log("Apellido: " +apellido)
console.log("Edad: " +edad)
console.log("Estatura: " +estatura)
console.log("Presente: " +presente)