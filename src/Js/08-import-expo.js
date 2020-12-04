// importar heroes
import heroes, {owner} from '../data/data';

// console.log(owner);
// Decñara funcion de busqueda por ID

export const getHeroById = (id) => heroes.find((heroes) => heroes.id === id); // Metodo FIND siempre tiene un CALLBACK 
    //Toma Heroes como ARGUMENTO e itera por toda la lista, 
    //buscando el ID que coincida con el parametro pedido
    //console.log( getHeroById(3) );

export const getHeroByOwner = (owner) => heroes.filter( (heroes) => heroes.owner === owner);
// Metodo FILTER siempre tiene un CALLBACK 
    //Toma Heroes como ARGUMENTO e itera por toda la lista, 
    //buscando el ID que coincida con el parametro pedido
    // console.log( getHeroByOwner( 'DC' ) );

