// Array Methods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    { nombre: 'Monitor de 20 pulgadas', precio: 500},
    { nombre: 'Television de 50 pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audífonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];

// forEach
meses.forEach(function(mes) {
    if(mes = 'Marzo'){
        console.log(mes);
    }
    
});

//Includes
let resultado = meses.includes('Diciembre')

//Some ideal para arreglo de objetos
// const resultado2 = carrito.some(function(producto){
//     return producto.nombre === 'Celular'
// });
const resultado2 = carrito.some(producto => producto.nombre === 'Celular');

//Reduce
// resultado = carrito.reduce(function(total, producto){
//     return total + producto.precio
// }, 0);

resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

//Filter
resultado = carrito.filter(function(producto){
    return producto.nombre !== 'Celular'
});

console.log(resultado);