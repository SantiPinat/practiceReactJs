      // DESESTRUCTURACION DE ARREGLOS 
      const personajes = ['Goku', 'Vegeta', 'Trunks', 'Gohan'];//Creo un arreglo
      const [p1, p2 , , p4] = personajes; //Lo desestructuro 
      // el elemento entre , , no aparece, lo saltea.
      console.log(personajes) // muestro Arreglo estructurado
      console.log(p4)//muestro en consola el resultado

      const returnArray = () => {
          return ['ABC', 123];
      }
      console.log(returnArray()); //muestro arreglo estructurado
      const [letras, numeros] = returnArray(); // desestructura ABC EN LETRAS y 123 en NuMEROS
      console.log(letras); // Muestra LETRAS desestructurado
      console.log(letras, numeros); // Muestra LETRAS y Numeros desestructurado

      const useState = (valor) => {
        return [valor, ()=>{console.log('Doin great,')}];
      } // CREA FUNCION QUE RETORNA ARREGLO con un ARGUMENTO llamado VALOR 

      // const arr = useState('Tisan'); // Guarda en constante el llamado de la funcion
      // console.log (arr); // muestra la constante del llamado de funcion
      // arr[1](); // llama la funcion dentro del aarreglo sin desestructurar

      
      const [name, setName] = useState('Tisan'); // Desestructuro el arreglo que devuelve la funcion
      console.log(name, setName); // Llama al primer elemento y al segundo
      setName(); //llama a la funcion que es el segundo elemento  de la lista
