// querySelector
const heading = document.querySelector('.header__texto h2') // 0 o 1 Elementos
heading.textContent = 'Nuevo Heading';
heading.classList.add('nueva-clase');
console.log(heading);

// querySelectorAll
//Retorna todos los elementos que concuerdan con la descripción
const enlaces = document.querySelectorAll('.navegacion a');
 enlaces[0].textContent = 'Nuevo Texto para Enlace';
 enlaces[0].classList.add('nueva-clase');
 //enlaces[0].classList.remove('navegacion__enlace');

// getElementById

// const heading2 = document.getElementById('heading');
// console.log(heading2);

//Generar un nuevo enlace o crear un nuevo enlace
const nuevoEnlace =document.createElement('A');

//Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';
//Agregar el texto
nuevoEnlace.textContent = 'Tienda Virtual';
//Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

//Agregarlo al documento
const navegacion = document.querySelector('.navegacion')
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);


//Eventos

console.log(1);

window.addEventListener('load', function() {// load espera a que el JS y los archivos que dependen del HTML estén listos
    console.log(2);
});

window.onload = function() {
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function() {// Solo espera por el HTML, no espera CSS o imagenes
    console.log(4);
});

console.log(5);

window.onscroll = function() {
    console.log('scrolling...');
}

// Seleccionar elementos y asociarles un evento
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento) {
//     console.log(evento);
//     evento.preventDefault(); // Evita la acción por defecto

//     //Validar un formulario
//     console.log('Enviando Formulario');
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

//El Evento de Submit
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    //Validar el formulario

    const {nombre, email, mensaje} = datos;

    if(nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios','error');
        //console.log('Todos los campos son obligatorios');
        return; //Corta la ejecución del código
    }

    //Enviar el formulario

    mostrarAlerta('Enviado Correctamente');
});

function leerTexto(e) {

    datos[e.target.id] = e.target.value;

    //console.log(datos);
}

function mostrarAlerta(mensaje, error=null) {
    const alerta = document.createElement('P'); //Crea un párrafo HTML
    alerta.textContent = mensaje;
    
    if(error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

        //Desaparezca después de 5 segundos
        setTimeout(() => {
            alerta.remove();
        }, 5000);
}