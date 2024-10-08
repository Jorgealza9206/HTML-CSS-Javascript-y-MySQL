//Clases

class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
    }
}

const producto2 = new Producto("Monitor curvo de 49\"",800);
const producto3 = new Producto("Laptop", 300);

class Libro {
    constructor(nombre, precio, isdn) {
        this.nombre = nombre;
        this.precio = precio;
        this.isdn = isdn;
    }
}

const libro = new Libro('Javascript La Revolución', 120, '918223546869913');
console.log(libro);

console.log(producto2);
console.log(producto3);