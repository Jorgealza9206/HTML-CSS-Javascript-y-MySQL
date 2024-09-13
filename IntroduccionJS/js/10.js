
//Métodos de propiedad
const reproductor = {
    reproducir : function(id) {
        console.log(`Reproducioendo Canción con el ID: ${id}`)
    },
    pausar: function(){
        console.log('Pausando...')
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la playlist: ${nombre}`)
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la playlist: ${nombre}`)
    }
}

reproductor.borrarCancion = function(id){
    console.log(`Eliminando la canción ${id}`)
}

console.log(reproductor);
reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist('Heavy Metal');
reproductor.reproducirPlaylist('Heavy Metal');