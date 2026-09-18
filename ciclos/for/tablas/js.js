const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    let num = parseInt(document.getElementById("nose1").value);
    let todas = document.getElementById("nose2").checked;

    if (todas) {
        for (let i = 1; i <= 10; i++) {
            for (let j = 1; j <= 10; j++) {
                resultado.innerHTML += i + " * " + j + " = " + i * j + "<br>";
            }
            resultado.innerHTML += "<br>";
        }
    } else {
        if (isNaN(num)) {
            resultado.innerHTML = "Ingrese un numero: ";
            return;
        }

        for (let i = 1; i <= 10; i++) {
            resultado.innerHTML += num + " * " + i + " = " + num * i + "<br>";
        }
    }
});

const boton = document.getElementById("reset");
boton.addEventListener("click", function () {
    form.reset();
    document.getElementById("resultado").innerHTML = "";
});