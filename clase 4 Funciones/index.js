var nombre = 'Jorge', edad = 23;

// Funcion sin parametros

function imprimirEdadSinParametros() {
	console.log(`${nombre} Tiene ${edad} años`);
}

imprimirEdadSinParametros();

// Funcion con parametros

function imprimirEdadConParametros(n, e) {
	console.log(`${n} Tiene ${e} años`);
}

imprimirEdadConParametros(nombre, edad);
imprimirEdadConParametros('Pedro', 20);