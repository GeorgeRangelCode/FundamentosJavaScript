// For

var jorge = {
	nombre: 'Jorge',
	apellido: 'Rangel',
	edad: 23,
	peso: 70
}

// Peso al inicio del año

console.log(`Al inicio del año ${jorge.nombre} pesa ${jorge.peso.toFixed(1)}Kg`);

const INCREMENTO_PESO = 0.2;
const DIAS_DEL_ANO = 365;

const aumentarDePeso = (persona) => persona.peso += INCREMENTO_PESO;
const adelgazar = (persona) => persona.peso -= INCREMENTO_PESO;

for (var i = 1; i <= DIAS_DEL_ANO; i++) {
	var random = Math.random();
	if(random < 0.25){
		aumentarDePeso(jorge);
	} else if(random < 0.5) {
		adelgazar(jorge);
	}
}


console.log(`Al Finañ del año ${jorge.nombre} pesa ${jorge.peso.toFixed(1)}Kg`);