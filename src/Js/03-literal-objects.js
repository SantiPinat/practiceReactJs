      //TEMPLATE STRINGS
      const name = 'Santi';

      const lastName = 'Pinat';

      let valueNum = 5; // example variable

      valueNum = 7; // Uploading the example variable

      // console.log( name, lastName, valueNum );

      // PARA CONCATENAR COMO SE HACIA ANTES
      // const fullName = name + ' ' + lastName;


      //PARA CONCATENAR CON TEMPLATE STRINGS
       const fullName = `${name} ${lastName} edad ${15*2} `;

       function getGreetings (completeName){
         return 'Hola ' + completeName;
       }
      

      // console.log( fullName );
      // console.log( `Este es un texto: ${getGreetings(fullName)}`);

      // CREA UN OBJETO O BIBLIOTECA
      const person = {
        name : 'Tisi',
        lastName : 'Boy',
        age : 30,
        locationn : {
                    loc: 'Buenos Aires',
                    zip: 1414,
                    latloc: 123142,
                  }
      }
      // ACCEDE A LA PROPIEDAD "NAME " del OBJETO "PERSON"
      console.table( person );