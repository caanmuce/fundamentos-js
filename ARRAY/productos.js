const rl = require("readline-sync");
const fs = require ("fs")

let listacompras = [];
let opcion;

function mostrarmenu () {
   console.log("\n=======================")
   console.log("lista de compras")
   console.log("=======================\n")

   console.log("1. Agregar producto");
   console.log("2. Mostrar productos");
   console.log("3. Agregar producto al inicio");
   console.log("4. Eliminar primer producto");
   console.log("5. Eliminar ultimo producto");
   console.log("6. Eliminar un producto");
   console.log("7. Mostrar cantidad de productos");
   console.log("8. Vaciar lista");
   console.log("9. Generar reporte");
   console.log("10. Salir");
   console.log("=======================\n")

}
function agregarproducto () {
   let producto = rl.question("Ingrese el producto: ");
   if (listacompras.includes(producto)) {
      console.log("El producto ya existe en la lista.");
   } else {
      listacompras.push(producto);
      console.log(`Producto "${producto}" agregado a la lista.`);
   }
}
function mostrarlista () {
    console.log("Lista de compras:");
    if (listacompras.length === 0) {
        console.log("La lista está vacía.");
    } else{
        for (let i = 0; i < listacompras.length; i++) {
            console.log(`${i + 1}. ${listacompras[i]}`);
        }
    }
}

function agregarproductoalinicio () {
    let producto = rl.question("Ingrese el producto: ");
    if (listacompras.includes(producto)) {
        console.log("El producto ya existe en la lista.");
    } else {
        listacompras.unshift(producto);
        console.log(`Producto "${producto}" agregado al inicio de la lista.`);
    }
}
function eliminarprimerproducto () {
    if (listacompras.length === 0) {
        console.log("La lista está vacía.");
    } else {
        let producto = listacompras.shift();
        console.log(`Producto "${producto}" eliminado de la lista.`);
    }
}

function eliminarultimoproducto () {
    if (listacompras.length === 0) {
        console.log("La lista está vacía.");
    } else {
        let producto = listacompras.pop();
        console.log(`Producto "${producto}" eliminado de la lista.`);
    }
}
function eliminarproducto () {
    if (listacompras.length === 0){
        console.log("la lista esta vacia")
    }else{
        let producto = rl.question("Ingrese el producto a eliminar: ");
        let posicion = listacompras.indexOf(producto);
        if (posicion !== -1) {
            listacompras.splice(posicion, 1);
            console.log(`Producto "${producto}" eliminado de la lista.`);
        } else {
            console.log("El producto no existe en la lista.");
        }
    }
}

function mostrarcantidad () {
    console.log(`Cantidad de productos en la lista: ${listacompras.length}`);
}

function vaciarlista () {
    listacompras = [];
    console.log("Lista vaciada.");
}
function generarreporte () {
    let contenido = "Reporte de productos:\n";
    if (listacompras.length === 0) {
        contenido += "La lista está vacía.";
    } else {
        for (let i = 0; i < listacompras.length; i++) {
            contenido += `${i + 1}. ${listacompras[i]}\n`;
        }
    }
    contenido += "\n------------------\n";
    contenido += "cantidad de productos: " + listacompras.length + "\n";

    fs.writeFileSync("reporte.txt", contenido);
    console.log("Reporte generado en el archivo 'reporte.txt'.");
}

do {
   mostrarmenu()
   opcion = rl.questionInt("Ingrese una opcion: ")
   switch (opcion) {
    case 1:
        agregarproducto();
        break;
    case 2:
        mostrarlista();
        break;
    case 3:
        agregarproductoalinicio();
        break;
    case 4:
        eliminarprimerproducto();
        break;
    case 5:
        eliminarultimoproducto();
        break;  
    case 6:
        eliminarproducto();
        break;
    case 7:
        mostrarcantidad();
        break;
    case 8:
        vaciarlista();
        break;
    case 9:
        generarreporte();
        break;
    case 10:
        console.log("Saliendo del programa...");
        break;
    default:
           console.log("Opcion no valida.");
        break;
    
   }
}
while(opcion !== 10);