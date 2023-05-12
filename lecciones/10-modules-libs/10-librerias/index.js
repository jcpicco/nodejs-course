// Instalar axios para hacer llamadas a servicios externos
// $npm install axios
// Utilizaremos para las pruebas https://pokeapi.co/

import axios from "axios"

axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(function (response){
        console.log("Success");
        console.log(response.data);
    })
    .catch(function (error){
        console.log("Error");
        console.log(error);
    });


// Los módulos más importantes son:
// - JQuery
// - React JS
// - View JS
// - Three JS
// - Google Polymer
// - Socket IO