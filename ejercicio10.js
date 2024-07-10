let jugador1 = prompt("Jugador 1: Ingrese PIEDRA, PAPEL o TIJERAS").toUpperCase();
let jugador2 = prompt("Jugador 2: Ingrese PIEDRA, PAPEL o TIJERAS").toUpperCase();

if (jugador1 === jugador2) {
    console.log("Empate");
} else if (
    (jugador1 === "PIEDRA" && jugador2 === "TIJERAS") ||
    (jugador1 === "PAPEL" && jugador2 === "PIEDRA") ||
    (jugador1 === "TIJERAS" && jugador2 === "PAPEL")
) {
    console.log("Jugador 1 gana");
} else if (
    (jugador2 === "PIEDRA" && jugador1 === "TIJERAS") ||
    (jugador2 === "PAPEL" && jugador1 === "PIEDRA") ||
    (jugador2 === "TIJERAS" && jugador1 === "PAPEL")
) {
    console.log("Jugador 2 gana");
} else {
    console.log("Uno de los jugadores ha hecho trampa");
}
