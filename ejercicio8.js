let numeroIncognita = Math.floor(Math.random() * 10) + 1;
let intentos = 3;

while (intentos > 0) {
    let numeroIngresado = parseInt(prompt(`Ingrese un número del 1 al 10 (Intentos restantes: ${intentos})`));
    if (numeroIngresado === numeroIncognita) {
        console.log("Ganaste, has adivinado el número.");
        break;
    } else if (numeroIngresado > numeroIncognita) {
        console.log("El número ingresado es mayor, vuelve a intentarlo.");
    } else {
        console.log("El número ingresado es menor, vuelve a intentarlo.");
    }
    intentos--;
}

if (intentos === 0) {
    console.log(`Perdiste. El número era ${numeroIncognita}.`);
}
