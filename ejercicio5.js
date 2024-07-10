let persona1 = {
    nombre: prompt("Ingrese el nombre de la primera persona"),
    edad: parseInt(prompt("Ingrese la edad de la primera persona")),
    altura: parseFloat(prompt("Ingrese la altura de la primera persona (en cm)"))
};

let persona2 = {
    nombre: prompt("Ingrese el nombre de la segunda persona"),
    edad: parseInt(prompt("Ingrese la edad de la segunda persona")),
    altura: parseFloat(prompt("Ingrese la altura de la segunda persona (en cm)"))
};

if (persona1.altura > persona2.altura) {
    console.log(`${persona1.nombre} es más alto(a).`);
} else if (persona1.altura < persona2.altura) {
    console.log(`${persona2.nombre} es más alto(a).`);
} else {
    console.log("Ambas personas tienen la misma altura.");
}

if (persona1.edad > persona2.edad) {
    console.log(`${persona1.nombre} es mayor.`);
} else if (persona1.edad < persona2.edad) {
    console.log(`${persona2.nombre} es mayor.`);
} else {
    console.log("Ambas personas tienen la misma edad.");
}
