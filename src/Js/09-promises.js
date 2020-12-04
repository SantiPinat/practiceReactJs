import heroes from './data/data';
import {getHeroById} from './Js/08-import-expo';

//const promesa = new Promise( (resolve, reject) => {   CREA PROMESA (SIEMPRE TIENE RESOLVE Y REJECT)
//    setTimeout( ()=>{                          Funcion que llama la promesa
//        const personaje1 = getHeroById(4);      Toma un personaje
//        resolve(personaje1);                  El RESOLVE manda la promesa a realizarse
//        reject('No se encontro el heroe');    El RESOLVE catchea errores
//    }, 5000)                                      El TIEMPO en SEG que tarda la promesa
//});

// promesa.then(                                  Activa la promesa
//     (heroe)=>{console.log(heroe)});             
//         .catch( err => console.warn(err));      catchea error (ERR es una convencion)

const getHeroByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {  
    setTimeout( ()=>{                         
        const personaje1 = getHeroById(id);      
        if (personaje1) {resolve(personaje1);}
        else {reject('No se encontro el heroe');}                 
    }, 5000)                                     
});
}

getHeroByIdAsync(3)
    .then( console.log )
    .catch(  console.warn );