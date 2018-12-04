// Definir un prototipo

function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function() {
    /*if (this.altura > 1.8) {        
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}, soy alto y mi altura es ${this.altura}`)
    }
    if (this.altura < 1.7) {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}, soy bajo y mi altura es ${this.altura}`)
    }*/
    // Forma de reducir el if y else
    this.altura > 1.8 ? console.log(`${this.nombre} es alto`) : console.log(`${this.nombre} es bajo`)
}

Persona.prototype.soyAlto = function() {
    return this.altura > 1.8
}

var jorge = new Persona('Jorge', 'Rangel', 1.85)
jorge.saludar()

var pedro = new Persona('Pedro', 'Perez', 1.65)
pedro.saludar()