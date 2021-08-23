//Dado el mismo array, hacer un codigo que muestre en consola el siguiente mensaje:
/* <li>Ana</li><li>Elsa</li><li>Ana</li><li>Olaf</li><li>Sven</li><li>Hans</li> */

const nombres = ["Ana", "Elsa", "Olaf", "Sven", "Hans"];
let nombre = "";
for (let i = 0; i < nombres.length; i++) {
	nombre = nombre + `<li>${nombres[i]}</li>`;
}
console.log(nombre);
