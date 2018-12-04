var jorge = {
    nombre: 'Jorge',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
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



console.log(personasAltas)
console.log(personasBajas)
console.log(personasCms)