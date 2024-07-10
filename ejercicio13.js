let dni = {
    nombre: prompt("Ingrese su nombre"),
    apellido: prompt("Ingrese su apellido"),
    edad: parseInt(prompt("Ingrese su edad")),
    altura: parseFloat(prompt("Ingrese su altura")),
    nacionalidad: prompt("Ingrese su nacionalidad"),
    numeroDNI: prompt("Ingrese su número de DNI")
};

console.log("Datos ingresados:", dni);
let confirmacion = prompt("¿Son correctos los datos ingresados? (si/no)").toLowerCase();

if (confirmacion === "si") {
    console.table(dni);
    console.log("Registro exitoso");
} else {
    console.log("Vuelva a intentarlo en 1 mes");
}
