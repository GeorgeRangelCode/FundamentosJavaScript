// hacer un request necesitamos una URL a la cual vamos a hacer el request
const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

// request GET jquery
const opts = { crossDomain: true };

function obtenerPersonaje(id, callback) {
	const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
	$.get(url, opts, function(namePerson) {
		//console.log(arguments);	
		console.log(`Hola, yo soy ${namePerson.name}`);	

		if (callback) {
			callback();
		}
	});
}


// En este caso no siempre llegan los datos en el orden en que los pedimos
// Esto es con Callback help que trae uno a uno los datos
obtenerPersonaje(1, function() {
	obtenerPersonaje(2, function() {		
		obtenerPersonaje(3, function() {
			obtenerPersonaje(4, function() {
				obtenerPersonaje(5, function() {
					obtenerPersonaje(6, function() {
						obtenerPersonaje(7)
					})
				})
			})
		})
	})
})



