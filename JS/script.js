console.log("JS conectado correctamente");

const botonTomate = document.getElementById("btn-tomate")
console.log("Boton tomate:", botonTomate);

const botonLechuga = document.getElementById("btn-lechuga")
const botonMaiz = document.getElementById("btn-maiz")
const botonMorron = document.getElementById("btn-morron")
const botonCebolla = document.getElementById("btn-cebolla")

const mensajeCultivo = document.getElementById("mensaje-cultivo");

const tarjetaTomate = document.getElementById("tomate");
const tarjetaLechuga = document.getElementById("lechuga");
const tarjetaMaiz = document.getElementById("maiz");
const tarjetaMorron = document.getElementById("morron");
const tarjetaCebolla = document.getElementById("cebolla");

function mostrarRecomendacion(texto,
    tarjetaSeleccionada) {
    mensajeCultivo.textContent = texto;
    tarjetaTomate.classList.remove("seleccionado");
    tarjetaLechuga.classList.remove("seleccionado");
    tarjetaMaiz.classList.remove("seleccionado");
    tarjetaMorron.classList.remove("seleccionado");
    tarjetaCebolla.classList.remove("seleccionado");
    tarjetaSeleccionada.classList.add("seleccionado");
}

function seleccionarTomate() {
    mostrarRecomendacion(
        "El tomate necesita riego moderado y exposición al sol. Fertilizar cada 2 semanas." +
        "Regar en la mañana." +
    "No regar en exceso.",
        tarjetaTomate
    );
}
function seleccionarLechuga() {
    mostrarRecomendacion(
        "La lechuga requiere riego frecuente y sombra parcial. Fertilizar cada 3 semanas.",
        tarjetaLechuga
    );
}

function seleccionarMaiz() {
    mostrarRecomendacion(
        "El maíz necesita riego regular y pleno sol. Fertilizar cada 4 semanas.",
        tarjetaMaiz
    );
}

function seleccionarMorron() {
    mostrarRecomendacion(
        "El morrón requiere riego moderado y exposición al sol. Fertilizar cada 3 semanas.",
        tarjetaMorron
    );
}

function seleccionarCebolla() {
    mostrarRecomendacion(
        "La cebolla necesita riego regular y sombra parcial. Fertilizar cada 4 semanas.",
        tarjetaCebolla
    );
}

botonTomate.addEventListener(
    "click",
    seleccionarTomate
);

botonLechuga.addEventListener(
    "click",
    seleccionarLechuga
);

botonMaiz.addEventListener(
    "click",
    seleccionarMaiz
);

botonMorron.addEventListener(
    "click",
    seleccionarMorron
);

botonCebolla.addEventListener(
    "click",
    seleccionarCebolla
);

