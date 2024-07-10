let nombre = prompt("Ingresa tu nombre:");
let edad = parseInt(prompt("Ingresa tu edad:"));
let altura = parseFloat(prompt("Ingresa tu altura en cm:"));
let vision = parseFloat(prompt("Ingresa tu visión (1-10):"));

if (edad >= 18 && altura > 150 && vision >= 8) {
    console.log(nombre + ", estás capacitado para conducir.");
} else {
    console.log(nombre + ", no estás capacitado para conducir.");
}
