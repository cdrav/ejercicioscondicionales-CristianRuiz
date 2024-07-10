let valor1 = parseFloat(prompt("Ingrese el primer valor"));
let valor2 = parseFloat(prompt("Ingrese el segundo valor"));
let operacion = prompt("Ingrese la operación (suma, resta, multiplicación, división)").toLowerCase();

let resultado;
switch (operacion) {
    case "suma":
        resultado = valor1 + valor2;
        console.log(`El resultado de la suma es: ${resultado}`);
        break;
    case "resta":
        resultado = valor1 - valor2;
        console.log(`El resultado de la resta es: ${resultado}`);
        break;
    case "multiplicación":
        resultado = valor1 * valor2;
        console.log(`El resultado de la multiplicación es: ${resultado}`);
        break;
    case "división":
        if (valor2 !== 0) {
            resultado = valor1 / valor2;
            console.log(`El resultado de la división es: ${resultado}`);
        } else {
            console.log("ERROR: El divisor no puede ser 0");
        }
        break;
    default:
        console.log("Operación no reconocida");
        break;
}
