// Funciones en JS 

const saludar = (nombre) => {console.log(`Hola ${nombre}`);}

const saludar2 = (nombre) => {return `Hola ${nombre}`;}

const saludar3 = (nombre) =>  `Hola ${nombre}`;

const saludar4 = () => 'Hola Mundo';

console.log(saludar('Juan'));
console.log(saludar2('pedro'));
console.log(saludar3('ramon'));
console.log(saludar4('vegeta'));

const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Papi1502'
});

console.log(getUser());


// Tarea
// 1. Transformar la función getUser en una función flecha
// 2. Tiene que retornar un objeto con uid y username
// 3. Pruebas:

// function getUsuarioActivo(){
//     return {
//         uid: 'ABC567',
//         username: 'el_Papi1502'
//     }
// } ;  // Función normal


const getUsuarioActivo = (nombre) => ({
    uid: 'ABC567',
    username: nombre
}); // Función flecha

const usuarioActivo = getUsuarioActivo('David');
console.log(usuarioActivo);

