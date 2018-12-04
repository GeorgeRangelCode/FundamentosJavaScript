/*

Asincronismo en JavaScript

- JavaScript solo puede hacer una sola cosa a la vez
- como JavaScript no es multitarea puede delegar la ejecucuión de ciertas funciones a otros procesos 
  este evento de concurrencia de llama Event Loop
- Event Loop

    JavaScript tiene algo llamado pila de ejecucuion callStack donde va poniendo las
    llamadas a funciones segun el orden de ejecucuion del programa, si una funcion llama o otra
    entonces esta se agrega a la pila, cuando termina de ejecutar una funcion la saca de la pila
    y la vota.

    En navegador se lleva un Callbak, es una funcion que JavaScript ejecutara cuando regrese
    la respuesta del servidor, mientras tanto javaScript seguira ejecutando el programa principal
    y cuando llegue la respuesta la ejecución a ejecutar va a parar a otro lado llamada la cola de
    tareas. Estas tareas son: (Peticiones a Servidores, Interacciones visuales, navegacion, eventos)

    Nota: No bloquear el Event Loop

