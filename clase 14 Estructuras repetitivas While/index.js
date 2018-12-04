// For

var jorge = {
	nombre: 'Jorge',
	apellido: 'Rangel',
	edad: 23,
	peso: 70
}

// Peso al inicio del año

console.log(`Al inicio del año ${jorge.nombre} pesa ${jorge.peso.toFixed(1)}Kg`);

const INCREMENTO_PESO = 0.3;
const DIAS_DEL_ANO = 365;

const aumentarDePeso = (persona) => persona.peso += INCREMENTO_PESO;
const adelgazar = (persona) => persona.peso -= INCREMENTO_PESO;
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;

const META = jorge.peso - 3;
var dias = 0;

while(jorge.peso > META){
	//Hace debug en js
	//debugger

	if (comeMucho()) {
		//Aumenta peso
		aumentarDePeso(jorge)
	}
	if (realizaDeporte()) {
		//Adelgazar
		adelgazar(jorge)
	}
	dias += 1
}


console.log(`Pasaron ${dias} dias hasta que ${jorge.nombre} adelgazo 3Kg`);