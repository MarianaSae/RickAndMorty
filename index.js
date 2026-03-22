function getCharacters(done){//definicion de funcion y parametro
    const results = fetch ("https://rickandmortyapi.com/api/character");//fetch para la peticion, lo guarda en result

    results
    .then(response => response.json())//obtiene la respuesta del servidor y lo hace a formato json
    .then(data =>{
        done(data)//recibe y usa los datos 
    });
}

    getCharacters(data =>{//funcion
        console.log(data);//imprime los datos obtenidos
    });
