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

function imprimirNombreEnMayusculas(persona) {
	// var nombre = persona.nombre;
	var {nombre} = persona;
	console.log(nombre.toUpperCase());
}

// imprimirNombreEnMayusculas(nombreJorge);
// imprimirNombreEnMayusculas(nombrePedro);


// Acceder al valor de un objeto

imprimirNombreEnMayusculas(jorge);
imprimirNombreEnMayusculas(pedro);
// imprimirNombreEnMayusculas({nombre: 'pepito'});

function imprimirNombreyEdad(datosPersona) {
	// imprime hola me llamo jorge y tengo 23 años
	var {nombre} = datosPersona;
	var {edad} = datosPersona;
	console.log(`Hola me llamo ${nombre} y tengo ${edad} años`);
}

imprimirNombreyEdad(jorge);
imprimirNombreyEdad(pedro);

