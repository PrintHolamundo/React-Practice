const nombre = 'Juan';
const apellido = 'Perez';


const nombreCompleto = `${nombre} ${apellido}`; // Template String

console.log(nombreCompleto);


function getSaludo(nombre) {
  return `Hola ${nombre}`;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);