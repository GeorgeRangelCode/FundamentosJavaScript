console.log('a')
/*setTimeout(function(){
console.log('b')
},2000)*/
// Otra forma de escribir SetTimeout con arrow function
setTimeout( () => console.log('b'),0)
console.log('c')


setTimeout( () => console.log('d'),2000)
// El setTimeout se ejecuta al finalizar toda la ejecucion del programa