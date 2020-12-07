const apiKey = '4pduJ0HAiiDQ8EfWrUTxo48EaVV7D3vU'; // GENERA APIKEY
 
const httpGetReq = fetch( `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`); //CONECTA CON API


//PROMESAS EN CADENA
httpGetReq.then( resp => resp.json()) //PRIMER PROMESA
          .then( ({data}) => {            //DESESTRUCTURA EL ARREGLO y SEGUNDA PROMESA DE LA CADENA 
              
            const {url} = data.images.original;
              
              const img = document.createElement('img');
              
              img.src = url;

              document.body.append(img);

          })
          .catch(console.warn); // UN SOLO CATCH ATRAPA TODOS LOS ERRORES DE LA CADENA