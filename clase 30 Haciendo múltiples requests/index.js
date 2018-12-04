// hacer un request necesitamos una URL a la cual vamos a hacer el request
const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

// request GET jquery
const opts = { crossDomain: true };
const onPeopleResponse = function(namePerson) {
	//console.log(arguments);	
	console.log(`Hola, yo soy ${namePerson.name}`);	
}

function obtenerPersonaje(id) {
	const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
	$.get(url, opts, onPeopleResponse);
}


// En este caso no siempre llegan los datos en el orden en que los pedimos
obtenerPersonaje(1);
obtenerPersonaje(4);
obtenerPersonaje(3);


