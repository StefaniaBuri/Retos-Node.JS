const fs = require('fs')
const readline = require('readline');
 
let objeto = {
    "name": "Stefania",
    "surname": "Buri Mejia",
    "age": 30
}

function objetoFs(){

    fs.writeFile('./objeto.json', JSON.stringify(objeto, null, 2), err =>{

        fs.readFile('./objeto.json', 'utf-8', (err, jsonString) => {
            if(err){
                console.log(err);
            }
            else{
                    console.log(JSON.parse(jsonString));
                }  
        })
        
    });         
};

objetoFs();

module.exports = {objetoFs}