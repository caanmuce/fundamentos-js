let pantalla = document.getElementById("pantalla");
function agregarNumero(numero) {
    pantalla.value += numero;
}

function agregarOperacion(operacion) {
    pantalla.value += operacion;
}

function limpiarPantalla() {
    pantalla.value = "";
}

function borrarUltimo() {
    pantalla.value = pantalla.value.slice(0, -1);
}

function calcular() {
    const expresion = pantalla.value.trim();

    if (!expresion) return;

    try {
        const resultado = eval(expresion);
        pantalla.value = resultado;
    } catch {
        pantalla.value = "Error";
    }
}
document.getElementById("btn0").addEventListener("click", function() {
    agregarNumero("0");
});
document.getElementById("btn1").addEventListener("click", function() {
    agregarNumero("1");
});
document.getElementById("btn2").addEventListener("click", function() {
    agregarNumero("2");
});
document.getElementById("btn3").addEventListener("click", function() {
    agregarNumero("3");
}); 
document.getElementById("btn4").addEventListener("click", function() {
    agregarNumero("4");
});
document.getElementById("btn5").addEventListener("click", function() {
    agregarNumero("5");
});
document.getElementById("btn6").addEventListener("click", function() {
    agregarNumero("6");
});
document.getElementById("btn7").addEventListener("click", function() {
    agregarNumero("7");
}); 
document.getElementById("btn8").addEventListener("click", function() {
    agregarNumero("8");
});
document.getElementById("btn9").addEventListener("click", function() {
    agregarNumero("9");
}   );
document.getElementById("btnplus").addEventListener("click", function() {
    agregarOperacion("+");
});
document.getElementById("btnminus").addEventListener("click", function() {
    agregarOperacion("-");
});
document.getElementById("btnmulti").addEventListener("click", function() {
    agregarOperacion("*");
}   
);
document.getElementById("btndiv").addEventListener("click", function() {
    agregarOperacion("/");
});     
document.getElementById("btnc").addEventListener("click", function() {
    limpiarPantalla();
});
document.getElementById("btnce").addEventListener("click", function() {
    borrarUltimo();
});
document.getElementById("btnequal").addEventListener("click", function() {
    calcular();
});
document.getElementById("btnpoint").addEventListener("click", function() {
    agregarOperacion(".");
});



