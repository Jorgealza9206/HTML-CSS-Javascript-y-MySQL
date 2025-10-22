// Async / await

function descargarNuevosClientes() {
    return new Promise( resolve => {
        console.log('Descargando clientes... espere...');

        setTimeout( () => {
            resolve('Los Clientes fueron Descargados');
        }, 5000 );
    });
}

function descargarUltimosPedidos() {
    return new Promise( resolve => {
        console.log('Descargando pedidos... espere...');

        setTimeout( () => {
            resolve('Los Pedidos fueron Descargados');
        }, 3000 );
    });
}

async function app() {
   try {
    //    const clientes = await descargarNuevosClientes();
    //    const pedidos = await descargarUltimosPedidos();
    //    console.log(clientes);
    //    console.log(pedidos);

    const resultado = await Promise.all([ descargarNuevosClientes(), descargarUltimosPedidos() ]);
    console.log(resultado[0]);
    console.log(resultado[1]);
   } catch (error) {
       console.log(error);
   }

  
}

app();

//Async / Await: 

// Async se le asigna a una función en la cual, esta hace un try/catch, en el try pone un promise y
// se le asigna un await, lo que quiere decir que espera hasta que se resuelva ese promise para
// ejecutarse sin  que esto perjudique el resto del código después de la función asíndrona. 

// Por ejemplo, tenemos una función async que no se ha resuelto, entonces mientras resuelve o 
// hace reject ejecuta el resto del código que haya 

// Esto hace que las dos promises se ejecuten al mismo tiempo 

// Y el resultado se pone como un item del vector, hasta que no se cumpla el promise de mayor tiempo no se resuelve 