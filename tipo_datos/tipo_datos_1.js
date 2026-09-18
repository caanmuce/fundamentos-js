
// let nombre = "ana";//String
// let edad = 32; //Number
// let estudiante = true;//Boolean
// let celular = null; //null
// let direccion; //undefined


// console.log(typeof nombre);
// console.log(typeof edad);
// console.log(typeof estudiante);
// console.log(typeof celular);
// console.log(typeof direccion);

const rl = require ("readline-sync")

let nombre = rl.question("Ingresa su nombre:");
let apellido = rl.question("Ingrese su apellido:");
let edad = parseInt (rl.question("Ingrese su estatura:"));
let presenteTexto = rl.question("Escribe true o false:");

let presente = (presenteTexto.toLowerCase() === "true");

console.log(`Nombre: ${nombre}`)
console.log("Apellido" +apellido)
console.log("Edad:",edad)
console.log("Estatura:", estatura)
console.log('Presente',presente)