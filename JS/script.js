const botonTomate = document.getElementById("btn-tomate")
const botonLechuga = document.getElementById("btn-lechuga")
const botonMaiz = document.getElementById("btn-maiz")
const mensajeCultivo = document.getElementById("mensaje-cultivo");

botonTomate.addEventListener("click", function()  {
    //Intrucciones
    mensajeCultivo.textContent = "El tomate es una planta que requiere de un clima cálido y soleado para crecer adecuadamente. Se recomienda sembrar en primavera o verano, en suelos bien drenados y ricos en materia orgánica. Es importante mantener un riego constante y evitar el exceso de agua para prevenir enfermedades.";
} );


botonLechuga.addEventListener("click", function()  {
    //Intrucciones
    mensajeCultivo.textContent = "La lechuga es una planta de clima fresco que se cultiva en épocas de primavera y otoño. Se recomienda sembrar en suelos ricos en materia orgánica y bien drenados. Es importante mantener un riego constante y protegerla del sol directo para evitar el amargor.";
} );


botonMaiz.addEventListener("click", function()  {
    //Intrucciones
    mensajeCultivo.textContent = "El maíz es una planta que requiere de un clima cálido y soleado para crecer adecuadamente. Se recomienda sembrar en primavera o verano, en suelos bien drenados y ricos en materia orgánica. Es importante mantener un riego constante y evitar el exceso de agua para prevenir enfermedades.";
} );

