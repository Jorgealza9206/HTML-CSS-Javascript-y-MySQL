const tweet = 'Aprendiendo JavaScript con el curso de Desarrollo Web Completo';
const prod2 = "Monitor HD"

console.log(tweet.length)

//Indexof: Decir en qué posición se encuentra una palabra dentro de un string
// Cuando no encuentra la palabra devuelve -1

console.log(tweet.indexOf('JavaScript'));

//includes: Devuelve true o false si encuentra la palabra
console.log(tweet.includes('JavaScript'));
console.log(tweet.includes('JavaScript', 10)); // Busca a partir de la posición