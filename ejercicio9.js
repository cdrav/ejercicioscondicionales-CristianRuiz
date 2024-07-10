let edad = parseInt(prompt("Ingrese su edad"));

if (edad >= 0 && edad <= 12) {
    console.log("Eres un infante.");
} else if (edad >= 13 && edad <= 18) {
    console.log("Eres un adolescente.");
} else if (edad >= 19 && edad <= 45) {
    console.log("Eres un mayor joven.");
} else if (edad > 45 && edad <= 100) {
    console.log("Eres un anciano.");
} else if (edad > 100) {
    console.log("¿Realmente tienes esa edad?");
}
