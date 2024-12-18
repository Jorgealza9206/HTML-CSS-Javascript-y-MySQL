function obtenerEmpleados(){
    const archivo = 'js/empleados.json';
    fetch(archivo)
        .then (resultado => {
            console.log(resultado);
        })
}

obtenerEmpleados();