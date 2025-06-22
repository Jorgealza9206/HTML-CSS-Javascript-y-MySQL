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

//Herencia

class Libro extends Producto {
    constructor(nombre, precio, isdn) {
        super(nombre,precio);
        this.isdn = isdn;
    }

    formatearProducto() {
        return  `${super.formatearProducto()} y su ISDN es ${this.isdn}`;
    }

}

const libro = new Libro('Javascript La Revolución', 120, '918223546869913');
console.log(libro.formatearProducto());
console.log(libro.obtenerPrecio());
console.log(producto2.formatearProducto());