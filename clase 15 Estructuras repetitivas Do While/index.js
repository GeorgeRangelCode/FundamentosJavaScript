var contador = 0

const llueve = () => Math.random() < 0.25

// si while de cumple de ejecuto lo del do
do {
	contador ++
} while (!llueve())

// validar si LLovio una o varias veces
var frecuencia = contador === 1 ? "vez" : "veces";
console.log(`Fui a ver si llovía ${contador} ${frecuencia}`);