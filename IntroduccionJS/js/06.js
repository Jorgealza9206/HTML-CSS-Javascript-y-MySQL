// Arreglos o Arrays

const numeros = [10,20,30,40,50];

console.table(numeros);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

console.table(meses);

// const arreglo = ["Hola", 10, true, "si", null, {nombre: "Juan", trabajo:"Programador"}, [1,2,3]]

// console.log(arreglo)

//Acceder a los valores del arreglo

// console.log(numeros[4]);
// console.log(numeros[2]);

//Conocer la extensión de un arreglo
// console.log(meses.length)

// meses.forEach( function(mes) {
//     console.log(mes);
// })

numeros.push(60,70); //Al final del arreglo
numeros.unshift(-10,-20,-30) //Al iniciod del arreglo

console.table(numeros);

// meses.pop(); //Elimina el ultimo elemento
// meses.shift(); //Elimina el primer elemento

meses.splice(2,1);
console.table(meses);

//Rest Operator o Spread Operator

const nuevoArreglo = [...meses, 'Junio']
console.log(nuevoArreglo)