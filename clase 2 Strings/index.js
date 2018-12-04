// Definir una variable
var nombre = "Jorge", apellido = "Rangel";

// Convertir nombre en Mayusculas
var nombreEnMayusculas = nombre.toUpperCase();

// Convertir apellido en minusculas
var apellidoEnMinusculas = apellido.toLowerCase();

// Primer Caracter de un String
var primerLetraDelNombre = nombre.charAt(0);

// Cantidad de caracteres de un String
var cantidadDeletrasDelNombre = nombre.length;

// Contatenas 2 Strings
//var nombreCompleto = nombre + ' ' + apellido;

// Mejor forma de concatenar String (Interpolacion de texto)
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`;

// Acceder a un subString
var str = nombre.substr(1,2);

// Ultima letra del nombre
var ultimaLetra = nombre.substr(-1);