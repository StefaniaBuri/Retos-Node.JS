const fs = require('fs')
const readline = require('readline');
 
let objeto = {
    "name": "Stefania",
    "surname": "Buri Mejia",
    "age": 30
}

function objetoFs(){

    fs.writeFile('./objeto.json', JSON.stringify(objeto, null, 2), err =>{

        if(err){
            console.log(err);
        }
        else{
            console.log('Archivo escrito con éxito');
        }
    });


    fs.readFile('./objeto.json', 'utf-8', (err, jsonString) => {
    if(err){
        console.log(err);
    }else{

            try{
                const data = JSON.parse(jsonString);
            // console.log(data.name);
                console.log(jsonString);
            }
            catch (err){
                console.log('Error analizando JSON', err);
            }
    }
    })
}

objetoFs();

module.exports = {objetoFs}