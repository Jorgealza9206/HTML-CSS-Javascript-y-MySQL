 "use strict"; // Correr JS en modo estricto
// Objetos
const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

// Object.freeze(producto); // No se puede modificar el objeto

producto.precio = 'Nuevo precio'; // No se puede agregar una nueva propiedad
//delete producto.precio; // No se puede eliminar una propiedad

console.log(Object.isFrozen(producto)); // Verifica si el objeto esta congelado

Object.seal(producto); // .freeze .seal

//console.log(Object.isSealed(producto)); // Verifica si el objeto esta sellado

producto.precio = 'NUEVO PRECIO'; 

//delete producto.precio;

console.log(producto);