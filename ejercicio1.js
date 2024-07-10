let num1 = prompt("Ingresa el primer número:");
let num2 = prompt("Ingresa el segundo número:");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

if (num1 > num2) {
    console.log("El primer número es mayor que el segundo.");
} else {
    console.log("El primer número no es mayor que el segundo.");
}