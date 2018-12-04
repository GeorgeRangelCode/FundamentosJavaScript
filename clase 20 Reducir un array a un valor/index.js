var jorge = {
    nombre: 'Jorge',
    apellido: 'Lifszyc',
    altura: 1.72,
    cantidadDeLibros: 2
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 3
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 4
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 5
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 6
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 7
}


// Array

/*Los arrays pueden tener
numeros
texto
funciones
objetos
o la combinacion de estos */

var personas = [jorge, alan, martin, dario, vicky, paula]

// Filtar Elemento de un Array
const esAlta = ({altura}) => altura > 1.8

var personasAltas = personas.filter(esAlta)

// Otra forma de filter
/*var personasAltas = personas.filter(function (persona){
    return persona.altura > 1.8
})*/

// Filtrar los mas bajos

const esBaja = ({altura}) => altura < 1.6

var personasBajas = personas.filter(esBaja)

// Funcion Map

const pasarAlturaACms = persona => ({
    ...persona,
    //altura: persona.altura = persona.altura * 100
    altura: persona.altura * 100  
})

var personasCms = personas.map(pasarAlturaACms)

// Contar la cantida de libros de las personas

var acum = 0

for (var i = 0; i < personas.length; i++) {
    acum = acum + personas[i].cantidadDeLibros
}

console.log(`En total todos tienen ${acum} libros`)

/*const reducer = (acum, persona) => {
    return acum + persona.cantidadDeLibros
}*/

// Reduciendo la funcion

const reducer = (acum, {cantidadDeLibros}) => acum + cantidadDeLibros

var totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total todos tienen ${totalDeLibros} libros`)

console.log(personasAltas)
console.log(personasBajas)
console.log(personasCms)