const rl = require ("readline-sync");

let n = Math.floor(Math.random() * 20 ) + 1;
let m = parseInt(rl.question ("ingrese un numeo: "));

while (m !== n) {
    if (m < n){
        console.log("mayor");

    } else {
        console.log("menor");
    } 
    m = parseInt(rl.question("ingresa otro numero: "))
    
}
console.log ("acertaste");