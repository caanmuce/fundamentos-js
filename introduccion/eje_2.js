let añoNacimiento = parseInt(prompt("Ingresa tu año de nacimiento:"));
let añoActual = new Date().getFullYear();
let edad = añoActual - añoNacimiento;
//console.log("Tu edad aproximada es"+ edad + "años")
//document.write("Tu edad aproximada es"+ edad + "años")
alert("Tu edad aproximada es:"+ edad + "años")

