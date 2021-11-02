const fs = require('fs')
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var preguntas = {
    nombre: "",
    apellidos: "",
    edad:""
};

function readConsola (){

rl.question('¿Cual es tu nombre? ', (respuesta) =>{
    preguntas.nombre = respuesta;
    
    rl.question('¿Cuales son tus apellidos? ', (respuesta) =>{
        preguntas.apellidos = respuesta;

   
        rl.question('¿Que edad tienes?', (respuesta) =>{
            preguntas.edad = respuesta;

            rl.setPrompt('Gracias por responder. Que tengas buen dia! \n');
            rl.prompt();
            rl.close();
        
        })
        
    })
   
});

rl.on('close', () =>{
    const preguntasResp = JSON.stringify(preguntas);
    //console.log(preguntasResp);
    rl.write(preguntasResp);
    process.exit();
})
}


readConsola();

module.exports = { readConsola }