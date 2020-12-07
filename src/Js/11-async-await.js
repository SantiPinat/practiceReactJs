const getImage = async() => {

    try { 
        const apiKey = '4pduJ0HAiiDQ8EfWrUTxo48EaVV7D3vU'; 
        const httpGetReq = await fetch( `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await httpGetReq.json();  //Genero Apu Key, conecto con API y 
        // pasa la {DATA} desestructurada a formato JSON
    
        const {url} = data.images.original; // {URL} desestructura URL y guarda el dato dentro de 
        // DATA.IMAGES.ORGIINAL
        
        const img = document.createElement('img'); //Crea el elemento IMG
    
        img.src = url;  // Le da al IMG el SRC de la URL que desestructuramos antes
    
        document.body.append(img); // Pone en el BODY la IMG que creamos
    }
    catch (error) {
        console.warn('No funciona la app')
    }
}
getImage();
