// hacer un request necesitamos una URL a la cual vamos a hacer el request
const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

// request GET jquery
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 4)}`;
const opts = { crossDomain: true };
const onPeopleResponse = function(namePerson) {
	//console.log(arguments);	
	console.log(`Hola yo soy, ${namePerson.name}`);	
}

$.get(lukeUrl, opts, onPeopleResponse);


