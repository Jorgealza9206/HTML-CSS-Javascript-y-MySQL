// Array Methods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800}
];

//Encontrar si un elemento existe en un array

// forEach
meses.forEach(function(mes) {
    if(mes == 'Marzo') { // Revisa si Marzo existe
        console.log('Marzo si existe');
    }
});

//Alternativa con Includes↓

// Includes
let resultado = meses.includes('Diciembre');

// Some ideal para arreglo de objetos
resultado = carrito.some(function(producto) {
    return producto.nombre === 'Celular'
})

console.log(resultado);

// Reduce: Ideal para sumar o concatenar elementos de un array
// Total es una variable inicializada en 0 y va sumando el precio de cada producto
resultado = carrito.reduce(function(total, producto) {
    return total + producto.precio
}, 0);

console.log(resultado);


// Filter
resultado = carrito.filter(function(producto) {
    return producto.precio > 400
});

resultado = carrito.filter(function(producto) {
    return producto.nombre !== 'Celular'
});

console.log(resultado);
