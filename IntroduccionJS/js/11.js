// Arrow functions

const sumar2 = (n1, n2) => console.log(n1+n2);
sumar2(5,10);

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`)

aprendiendo('JavaScript');






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
meses.forEach(mes => {
    if(mes = 'Marzo'){
        console.log(mes);
    }
    
});

//Some ideal para arreglo de objetos
// const resultado2 = carrito.some(function(producto){
//     return producto.nombre === 'Celular'
// });
const resultado = carrito.some(producto => producto.nombre === 'Celular PRO');

console.log(resultado);

//Reduce
// resultado = carrito.reduce(function(total, producto){
//     return total + producto.precio
// }, 0);

resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

//Filter
resultado = carrito.filter(function(producto){
    return producto.nombre !== 'Celular'
});