// Async / Await

function descargarNuevosClientes() {
    return new Promise( resolve => {
        console.log('Descargando clientes... espere...');

        setTimeout( function() {
            resolve('Los clientes fueron descargados');
        },5000)
    });
}

async function app() {
    try{
        const resulatado = await descargarNuevosClientes();
        console.log(resulatado);
    }
    catch(error){
        console.log(error);
    }
}

app();