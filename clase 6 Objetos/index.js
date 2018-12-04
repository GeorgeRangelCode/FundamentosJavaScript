var nombreJorge = 'Jorge';
var nombrePedro = 'Pedro';

// Crear Objetos

var jorge = {
	nombre: 'Jorge',
	apellido: 'Rangel',
	edad: 23
}

var pedro = {
	nombre: 'Pedro',
	apellido: 'Perez',
	edad: 20
}

function imprimirNombreEnMayusculas({nombre}) {
	console.log(nombre.toUpperCase());
}

// imprimirNombreEnMayusculas(nombreJorge);
// imprimirNombreEnMayusculas(nombrePedro);


// Acceder al valor de un objeto

imprimirNombreEnMayusculas(jorge);
imprimirNombreEnMayusculas(pedro);
imprimirNombreEnMayusculas({nombre: 'pepito'});
