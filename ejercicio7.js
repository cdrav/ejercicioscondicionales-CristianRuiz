let nombre = prompt("Ingresa tu nombre:");
let pase = prompt("¿Tienes pase VIP o normal?");
let poseeEntrada = prompt("¿Tienes entrada? (si/no)");

if (nombre === "TuNombre" || pase.toLowerCase() === "vip") {
    console.log("Bienvenido, " + nombre);
} else if (poseeEntrada.toLowerCase() === "si") {
    let usarEntrada = prompt("¿Deseas usar tu entrada? (si/no)");
    if (usarEntrada.toLowerCase() === "si") {
        console.log("Bienvenido, " + nombre);
    } else {
        console.log("Despedida.");
    }
} else {
    let comprarEntrada = prompt("¿Deseas comprar una entrada? (si/no)");
    if (comprarEntrada.toLowerCase() === "si") {
        let dinero = parseFloat(prompt("¿Cuánto dinero tienes?"));
        if (dinero >= 1000) {
            console.log("Venta exitosa. Bienvenido, " + nombre);
        } else {
            console.log("Dinero insuficiente. Venta rechazada.");
        }
    } else {
        console.log("Despedida.");
    }
}
