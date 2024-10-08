//Ejercicio 5 Arreglar bug de asincronía
/*Tenemos otro error que nuestro cliente nos pide arreglar. El cliente está pidiendo un usuario
y nos dice que está usando el id correcto el 1. Pero que siempre le da undefined. Nos ha
pasado el código que tenemos que revisar y arreglar. Para este problema crear un archivo
llamado bugAsync.js con la solución.*/

//Funcion con el bug
/*
function obtenerUsuario (id) {
    let usuario;

    setTimeout(() => {
        if (id === 1) {
            usuario = { id: 1, nombre: 'John Doe' };
        }
    
    }, 2000);

    return usuario;
}

const usuario = obtenerUsuario(1);

console.log(usuario);

 */

function obtenerUsuario(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (id === 1) {
                resolve({ id: 1, nombre: 'John Doe' });
            } else {
                resolve(null);
            }
        }, 2000);
    });
}

obtenerUsuario(1).then(usuario => {

console.log(usuario);

});

/*El problema estaba en que se ha usado un "setTimeout" dentro de la función para ejecutar un código 2 segundos despues, pero la función "obtenerUsuario" se ejecutaba inmediatamente, sin esperar a que terminara la ejecución del código dentro del "setTimeout". Esto nos daba un resultado "undefined" porque en ese momento la variable usuario no tiene un valor asignado. Para resolver esto, he usado una promesa.*/