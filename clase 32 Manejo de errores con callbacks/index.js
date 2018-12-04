// hacer un request necesitamos una URL a la cual vamos a hacer el request
const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

// request GET jquery
const opts = { crossDomain: true };

function obtenerPersonaje(id, callback) {
	const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
	$
		.get(url, opts, callback)
		.fail(() => {
		console.log(`Sucedio un error no se pudo obtener el personaje ${id}`)
	});
}


// En este caso no siempre llegan los datos en el orden en que los pedimos
// Esto es con Callback help que trae uno a uno los datos
obtenerPersonaje(1, function(personaje) {
	console.log(`Hola, yo soy ${personaje.name}`)

	obtenerPersonaje(2, function(personaje) {
		console.log(`Hola, yo soy ${personaje.name}`)

		obtenerPersonaje(3, function(personaje) {
			console.log(`Hola, yo soy ${personaje.name}`)

			obtenerPersonaje(4, function(personaje) {
				console.log(`Hola, yo soy ${personaje.name}`)

				obtenerPersonaje(5, function(personaje) {
					console.log(`Hola, yo soy ${personaje.name}`)

					obtenerPersonaje(6, function(personaje) {
						console.log(`Hola, yo soy ${personaje.name}`)

						obtenerPersonaje(7, function(personaje) {
							console.log(`Hola, yo soy ${personaje.name}`)							
						})
					})
				})
			})
		})
	})
})



