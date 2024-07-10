let num1 = prompt("Ingresa el primer número:");
let num2 = prompt("Ingresa el segundo número:");
let num3 = prompt("Ingresa el tercer número:");

num1 = parseFloat(num1);
num2 = parseFloat(num2);
num3 = parseFloat(num3);

let min = Math.min(num1, num2, num3);

console.log("El número más pequeño es:", min);
