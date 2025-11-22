// function obtenerEmpleados() {

//     const archivo = './js/empleados.json';

    // fetch(archivo)
    //     .then( resultado =>  resultado.json() )
    //     .then( datos => { 
    //         //console.log(datos.empleados)

    //         const { empleados } = datos;
    //        //console.log(empleados);

    //        empleados.forEach( empleado => {
    //             console.log(empleado.nombre);

    //             //document.querySelector('.contenido').textContent += empleado.nombre;
    //        });
    //     });
        
// }


async function obtenerEmpleados() {

    const archivo = './js/empleados.json';

    // fetch(archivo)  //Función para enviar el response a 'resultado'
    //     .then( resultado => console.log(resultado))

    // fetch(archivo)
    //     .then( resultado => resultado.json())
    //     .then( datos => {
    //         // console.log(datos.empleados);

    //         const { empleados } = datos;
    //        console.log(empleados);
    //     });

    const resultado = await fetch(archivo); //El resultado de fetch se guarda en 'resultado'
    const datos = await resultado.json();
    console.log(datos);
}
obtenerEmpleados();