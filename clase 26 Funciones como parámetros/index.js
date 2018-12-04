// Clases em Javascript
class Persona {
    constructor (nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar (fn) {
        var {nombre, apellido, altura} = this
        altura > 1.8 ? console.log(`Mi nombre es: ${nombre} y soy alto`) 
                          : console.log(`Mi nombre es: ${nombre} y soy bajo`)
        if (fn) { // null = false, 0 = false,
            fn(nombre, apellido)
        }
    }

    soyAlto () {
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona {
    constructor (nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }

    saludar(fn) {
        // var nombre = this.nombre
        // var apellido = this.apellido
        // var altura = this.altura
        // Equivalente a lo anterior se puede usar esta forma
        var {nombre, apellido, altura} = this
        altura > 1.8 ? console.log(`Mi nombre es: ${nombre} soy desarrolador y soy alto`) 
                          : console.log(`Mi nombre es: ${nombre} soy desarrolador y soy bajo`)
        if (fn) { // null = false, 0 = false,
            fn(nombre, apellido, true)
        }
    }
}


function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen dias ${nombre} ${apellido}`)
    if (esDev) {
        console.log(`Ah mirá, no sabias que eras desarrolador`)
    }
}


// Clase persona
var jorge = new Persona('Jorge', 'Rangel', 1.85)
jorge.saludar(responderSaludo)

var arturo = new Persona('Arturo', 'Gomez', 1.65)
arturo.saludar(responderSaludo)

// Clase Desarrollador heredado de persona
var pedro = new Desarrollador('Pedro', 'Perez', 1.65)
pedro.saludar(responderSaludo)