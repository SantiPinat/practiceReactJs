      // DESESTRUCTURACION - MUCHO MUY IMPORTANTE 
      
      const objectPerson = {
        name: 'Tony',
        lastName: 'Stark',
        age: 49,
        clave: 'Ironman',
        rank: 'General'
      }; //CREO UN OBJETO

     const useContext = ({lastName, clave, age, rank='soldier', name}) => {
           
           return {
             nickName: clave,
             edad: age,
             rank: rank,
             name: name,
             apellido: lastName
           }
     };//funcion que returna desestructurados

      //console.table( objectPerson );
      const {nickName, name, edad, rank, apellido} = useContext(objectPerson);// Desestructuro los objetos
      console.log( name, edad, rank, nickName, apellido)