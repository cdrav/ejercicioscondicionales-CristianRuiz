let nombre = prompt("Ingresa tu nombre:");
let pase = prompt("¿Tienes pase VIP o normal?").toLowerCase();
let poseeEntrada = prompt("¿Tienes entrada? (si/no)").toLowerCase();

if (nombre === "Cristian" || pase === "vip") {
    console.log("Bienvenido, " + nombre);
} else if (poseeEntrada === "si") {
    let usarEntrada = prompt("¿Deseas usar tu entrada? (si/no)").toLowerCase();
    if (usarEntrada === "si") {
        console.log("Bienvenido, " + nombre);
    } else {
        console.log("Despedida.");
    }
} else {
    let comprarEntrada = prompt("¿Deseas comprar una entrada? (si/no)").toLowerCase();
    if (comprarEntrada === "si") {
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
