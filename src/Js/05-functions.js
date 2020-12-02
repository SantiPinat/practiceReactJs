      // como crear funciones correctamente -> ASIGNARLA A UNA CONSTANTE

      const nombre = 'Santi'
      const apellido = 'Pinat'


      const functionHi = function(){
        return `Hola ${nombre} ${apellido}`;
      };

      // otra manera mas adecuada de hacer la funcion
      const functionHi1 = () => {
        return `Hola desde funcHi1 ${nombre} ${apellido}`;
      };

      // SI LA FUNCION SOLO TIENE 1 RETURN
      const functionHi3 = () => `Hola desde funcHi3 ${nombre} ${apellido}`;
      

      // PARA QUE FX DE FLECHA MANDE OBJETO SE PONEN ()

      const getUser = () => ({userId: 123123, userName: 'Tc'});


     // console.log(functionHi(), functionHi1(),functionHi3(), getUser());

      const getActiveUser = (name) => ({userId: 222333, userName: name});

      const activeUser = getActiveUser('Santi')
      console.log(activeUser);