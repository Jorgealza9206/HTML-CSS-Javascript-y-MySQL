// Arreglos o Arrays

const numeros = [10,20,30,40,50];





// const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');

// console.table(meses);

// Acceder a los valores de un arreglo
// console.log(numeros[0]);
// console.log(numeros[1]);
// console.log(numeros[2]);
// console.log(numeros[3]);
// console.log(numeros[4]);

// Conocer la extensión de un arreglo
// console.log(meses.length);

// numeros.forEach( function(numero) {
//     console.log(numero);
// })

// numeros.push(60,70,80); // Al final del arreglo
// numeros.unshift(-10,-20,-30); // al inicio del arreglo

// console.table(numeros);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];


const arregloCosas = [true, 123, 'Hola', null, {nombre: 'Alex', trabajo: 'Desarrollador'}, [1,2,3]];

console.log(arregloCosas);

console.log(meses.length);

meses.forEach( function(mes) {
    console.log(mes);
})

numeros[5] = 60;
numeros[6] = 70;
numeros[7] = 80;


numeros.push(90,100); // Al final del arreglo
numeros.unshift(-10,-20,-30); // al inicio del arreglo
console.table(numeros);   

// meses.pop(); // elimina el último elemento
// meses.shift(); // elimina el primer elemento

meses.splice(2, 1); // Elimina un elemento en específico, 
//primer iteración es la posición, segunda iteración es la cantidad de elementos a eliminar
console.table(meses);

// Rest Operator o Spread Operator

const nuevoArreglo = ['Junio', ...meses]; // Agrega un elemento al inicio del arreglo
// const nuevoArreglo = [...meses, 'Junio']; // Agrega un elemento al final del arreglo
// const nuevoArreglo = [...meses.slice(0,2), 'Nuevo Mes', ...meses.slice(2)]; // Agrega un elemento en medio del arreglo
console.log(nuevoArreglo);
