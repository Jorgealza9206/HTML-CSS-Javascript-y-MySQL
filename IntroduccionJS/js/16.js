
// Declaración de Función
sumar();
function sumar() {
    console.log(10 + 10);
}



// Expresión de la función
const sumar2 = function() {
    console.log( 3 + 3);
}
sumar2();

//IIFE: Su función es proteger las variables para que no se combinen con otras variables de otros archivos
(function() {
    console.log('Esto es una función');
})();

