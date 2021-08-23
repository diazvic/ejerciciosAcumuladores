// const numeros = [5, 7, 8, 4]
// Hacer un codigo que recorra el array numeros y muestre en consola la suma de todos ellos. El resultado deberia ser 24.

const numeros = [5, 7, 8, 4];

let suma = 0;

for (let i = 0; i < numeros.length; i++) {
	suma = suma + numeros[i];
}
console.log(suma);
