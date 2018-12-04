// Condicionales

var jorge = {
	nombre: 'Jorge',
	apellido: 'Rangel',
	edad: 23,
	ingeniero: true,
	cocinero: false,
	cantante: false,
	dj: false,
	guitarrista: false,
	drone: true
}

// Funcion profesiones

function imprimirProfesiones(persona) {
	console.log(`${persona.nombre} Es: `);
	if (persona.ingeniero) {
		console.log(`Ingeniero`);
	} else {
		console.log(`No es ingeniero`);
	}

	if (persona.cocinero) {
		console.log(`Cocinero`);	
	} else {
		console.log(`No es Cocinero`)
	}

	if (persona.dj) {
		console.log(`Dj`);	
	} else {
		console.log(`No es Dj`);
	}

	if (persona.cantante) {
		console.log(`Cantante`);	
	} else {
		console.log(`No es Cantante`);
	}

	if (persona.guitarrista) {
		console.log(`Guitarrista`);	
	} else {
		console.log(`No es Guitarrista`);
	}

	if (persona.drone) {
		console.log(`Piloto drone`);	
	} else {
		console.log(`No es Piloto drone`);
	}

}

// Funcion para saber si una persona es mayor de edad

function imprimirSiEsMayorDeEdad(persona) {
	console.log(`${persona.nombre}`);
	if (persona.edad >= 18) {
		console.log(`Es Mayor de Edad`);
	} else {
		console.log(`No Es Mayor de Edad`);
	}
}

imprimirProfesiones(jorge);

imprimirSiEsMayorDeEdad(jorge);