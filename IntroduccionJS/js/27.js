// POO 

/** Object Literal */
const producto = {
    nombre: 'Tablet',
    precio: 500
}

// Object Constructor
function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}
    // Crear funciones que solo se utilizan en un objeto en especifico.
Cliente.prototype.formatearCliente = function() {
    return `El Cliente ${this.nombre} ${this.apellido}`;
}
//Prototype es una propiedad que tienen las funciones en JS, que permite agregarle nuevas propiedades y métodos al objeto.


function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}
// Crear funciones que solo se utilizan en un objeto en especifico.
Producto.prototype.formatearProducto = function() {
    return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
}

const producto2 = new Producto('Monitor Curvo de 49"', 800);
const producto3 = new Producto('Laptop', 300);
const cliente = new Cliente('Juan', 'De la torre');


console.log(producto2);
console.log(producto2.formatearProducto() );
console.log(producto3.formatearProducto() );

