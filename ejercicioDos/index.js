// const nombres = ["Ana", "Elsa", "Olaf", "Sven", "Hans"]
// Dado el anterior array de nombres, hacer un codigo que recorra todos los nombres y muestre en consola el mensaje Ana - Elsa - Olaf - Sven - Hans - (con guiones)

const nombres = ["Ana", "Elsa", "Olaf", "Sven", "Hans"];

let nombresTotales = "";

for (let i = 0; i < nombres.length; i++) {
	nombresTotales = nombresTotales + `${nombres[i]} - `;
}
console.log(nombresTotales);
