// Clases em Javascript
class Persona {
    constructor (nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar () {
        this.altura > 1.8 ? console.log(`Mi nombre es: ${this.nombre} y soy alto`) 
                          : console.log(`Mi nombre es: ${this.nombre} y soy bajo`)
    }

    soyAlto () {
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona {
    constructor (nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }

    saludar() {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} soy desarrolador`)
    }
}

// Clase persona
var jorge = new Persona('Jorge', 'Rangel', 1.85)
jorge.saludar()

// Clase Desarrollador heredado de persona
var pedro = new Desarrollador('Pedro', 'Perez', 1.65)
pedro.saludar()