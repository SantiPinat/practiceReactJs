// OPERADORES TERNARIOS - REEMPLAZAN IF ELSE
const activo = 'Hola Santi';
// const mensaje = ( activo ) ? 'activo' : 'inactivo';
        // condicion  pregunta  true   false

// const mensaje = (!activo) ? 'activo' : null;

const mensaje = (!activo) && 'activo';
// cuando quiero poner sólo una condicion uso el && o el ||

console.log(activo, mensaje); 