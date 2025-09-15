// Unir dos objetos

const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

const nuevoProducto = { ...producto, ...medidas }; // Spread operator

// const nuevoProducto = Object.assign(producto, medidas); // Otra forma de unir objetos

console.log(producto);
console.log(nuevoProducto);