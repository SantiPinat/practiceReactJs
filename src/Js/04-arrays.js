      //ARREGLOS Y METODOS DE ARREGLOS - ARRAYS

      const arreglo = [1, 2, 3, 4]; //arreglo inicializado con 4 objetos
      // arreglo.push(3); MALA MANERA DE CAMBIAR ARREGLO

      const arreglo2 = [ ...arreglo, 5]; //Toma arreglo y le agrega un 5, generando arreglo2 siendo copia de arreglo y con el 5 adicional

      // recorre arreglo2 y a cada objeto le asigna lo que va dps de return
      const arreglo3 = arreglo2.map( function (x){
        return  'soy el ' + x * 2 ;
      });

      console.log(arreglo, arreglo2, arreglo3);
