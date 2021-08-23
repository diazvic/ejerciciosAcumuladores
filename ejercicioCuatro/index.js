// Dado el mismo array, hacer un codigo que muestre en el HTML de la pagina una lista ordenada con todos los nombres. El "ul" ya deberia estar en el HTML. El resto se debe hacer con javascript

const nombres = ["Ana", "Elsa", "Olaf", "Sven", "Hans"];
const lista = document.querySelector(".lista");

let nombresTotales = "";

for (let i = 0; i < nombres.length; i++) {
	nombresTotales = nombresTotales + `<li>${nombres[i]}</li>`;
}

lista.innerHTML = nombresTotales;
console.log(nombresTotales);
