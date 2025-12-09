// // querySelector

// //Podemos seleccionar por clase, id, o cualquier etiqueta HTML
// //Si selecciona por clase usa '.nombre-de-la-clase' y agregamos espacios para seleccionar elementos hijos

// const heading = document.querySelector('#heading') // 0 o 1 Elementos //Query Selector selecciona un elemento HTML
// //Utiliza mejor los identificadores en vez de las clases en archivos JS
// heading.textContent = 'Nuevo Heading';
// heading.classList.add('nueva-clase');
// console.log(heading);

// // querySelectorAll
// //Retorna todos los elementos que concuerdan con la descripción
// const enlaces = document.querySelectorAll('.navegacion a');
// enlaces[0].textContent = 'Nuevo Texto para Enlace'; //Cambia el texto del primer enlace
// enlaces[0].classList.add('nueva-clase'); //Agrega una clase al primer enlace
// // enlaces[0].classList.remove('navegacion__enlace'); //Elimina una clase del primer enlace

// // getElementById

// // const heading2 = document.getElementById('heading'); //No es necesario el '#'
// // console.log(heading2);

// //Generar un nuevo enlace o crear un nuevo enlace
// const nuevoEnlace =document.createElement('A'); //Crear un nuevo elemento HTML

// //Agregar el href
// nuevoEnlace.href = 'nuevo-enlace.html'; //Agrega el atributo href a la etiqueta A
// //Agregar el texto
// nuevoEnlace.textContent = 'Tienda Virtual';
// //Agregar la clase
// nuevoEnlace.classList.add('navegacion__enlace');

// console.log(nuevoEnlace);

// //Agregarlo al documento
// const navegacion = document.querySelector('.navegacion') //Referencia la clase navegacion
// navegacion.appendChild(nuevoEnlace); //Pone la etiqueta A dentro de la clase navegacion

// // console.log(nuevoEnlace);


//Eventos

// console.log(1);

// window.addEventListener('load', function() {// load espera a que el JS y los archivos que dependen del HTML estén listos
//     console.log(2);
// });

// window.onload = function() { //Ocurre hasta que cargue la página
//     console.log(3);
// }

// document.addEventListener('DOMContentLoaded', function() {// Solo espera por el HTML, no espera CSS o imagenes
//     console.log(4);
// });

// console.log(5);

// window.onscroll = function() {
//     console.log('scrolling...');
// }

// Seleccionar elementos y asociarles un evento
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento) {
//     console.log(evento);
//     evento.preventDefault(); // Evita la acción por defecto
//     //Validar un formulario
//     console.log('Enviando formulario');
// });


    

// Evento de los inputs y textarea

const datos ={
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    console.log('Enviando Formulario');
}); // En este caso siempre debes tener un formulario de tipo submit

function leerTexto(e) {
    datos[e.target.id] = e.target.value; //e.target.id obtiene el id del input al que se le está escribiendo
    // e.target.value obtiene el valor que se está escribiendo en ese input
    // console.log(e.target.value);

    console.log(datos);
}
    //Validar el formulario

//     const {nombre, email, mensaje} = datos;

//     if(nombre === '' || email === '' || mensaje === '') {
//         mostrarAlerta('Todos los campos son obligatorios','error');
//         //console.log('Todos los campos son obligatorios');
//         return; //Corta la ejecución del código
//     }

//     //Enviar el formulario

//     mostrarAlerta('Enviado Correctamente');
// });

// function leerTexto(e) {

//     datos[e.target.id] = e.target.value;

//     //console.log(datos);
// }

// function mostrarAlerta(mensaje, error=null) {
//     const alerta = document.createElement('P'); //Crea un párrafo HTML
//     alerta.textContent = mensaje;
    
//     if(error) {
//         alerta.classList.add('error');
//     } else {
//         alerta.classList.add('correcto');
//     }

//     formulario.appendChild(alerta);

//         //Desaparezca después de 5 segundos
//         setTimeout(() => {
//             alerta.remove();
//         }, 5000);
// }