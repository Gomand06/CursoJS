// Crear variables

/*
var
let
const 
*/

var helloWorld = "¡Hello JavaScript!" // var fue la forma original, la primera forma de crear variables
console.log(helloWorld)

helloWorld = "Hola de nuevo, JavaScript"
console.log(helloWorld)

// NO usar var porque es una forma desactualizada, tienen ciertos problemas de definición

// FUNCIONES QUE SI SE DEBEN USAR: "let" y "const"

// let
let helloWorld2 = "Hola JavaScript 2" // solo son accesibles dentro del bloque
console.log(helloWorld2)
helloWorld2 = "Hola de nuevo JavaScript 2"
console.log(helloWorld2)

//const
const helloWorld3 = "Hola mundo 3" // const es Constante por lo que no se pueden reasignar
console.log(helloWorld3)
/*
Error
helloWorld3 = "Hola de nuevo 3"
*/