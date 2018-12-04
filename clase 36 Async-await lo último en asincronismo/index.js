// hacer un request necesitamos una URL a la cual vamos a hacer el request
const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

// request GET jquery
const opts = { crossDomain: true };

function obtenerPersonaje(id) {
	return new Promise((resolve, reject) => {
		const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
		$
			.get(url, opts, function (data) {
				resolve(data)
			})
			.fail(() => reject(id))
	})
}


function onError(id) {
	console.log(`Sucedio un error al obtener el personaje: ${id}`)
}

// funcion Asincrona para poder usar await  y esto se debe poner en un bloque try catch

async function obtenerPersonajes() {
	var ids = [1, 2, 3, 4, 5, 6, 7]
	/*var promesas = ids.map(function(id) {
		return obtenerPersonaje
	})*/
	var promesas = ids.map(id => obtenerPersonaje(id))
	try {
		var personajes = await Promise.all(promesas)
		console.log(personajes)
	} catch (id){
		onError(id)
	}
}

obtenerPersonajes()