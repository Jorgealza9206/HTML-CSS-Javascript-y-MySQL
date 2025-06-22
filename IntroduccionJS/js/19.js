// Async / Await / Un async await hace que se ejecute todo el resto de código de la aplicación, mientras que
// las funciones asíncronas tardan en ejecutarse
// Async declara que una función sea asíncrona y el await espera que la función interna se ejecute para que cumpla la función
// asíncrona

function descargarNuevosClientes() {
    return new Promise( resolve => {
        console.log('Descargando clientes... espere...');

        setTimeout( function() {
            resolve('Los clientes fueron descargados');
        },5000)
    });
}

function descargarUltimosPedidos() {
    return new Promise( resolve => {
        console.log('Descargando pedidos... espere...');

        setTimeout( function() {
            resolve('Los pedidos fueron descargados');
        },3000)
    });
}

async function app() {
    try{
        // const clientes = await descargarNuevosClientes();
        // const pedidos = await descargarUltimosPedidos();
        // console.log(clientes);
        // console.log(pedidos);

        const resultado = await Promise.all([ descargarNuevosClientes(), descargarUltimosPedidos() ]);
        console.log(resultado[0]);
        console.log(resultado[1]); // Con esta solucion se ve el mensaje cuando se ejecute el Promise mas demorado,
                                // Lo óptimo sería crear otra función app cque ejecute la función de los pedidos
    }
    catch(error){
        console.log(error);
    }
}

app();

console.log('Este código no se bloquea')