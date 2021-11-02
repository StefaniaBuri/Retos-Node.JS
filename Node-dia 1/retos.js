//----------RETO 1------------

setTimeout(() =>{
    console.log("Mensaje 1");
})

setTimeout(() =>{
    console.log("Mensaje 2");
},3000)

setTimeout(() =>{
    console.log("Mensaje 3");
},3000)



//---------- RETO 2------------

const fs = require('fs')
const readline = require('readline');
 
let objeto = {
    "name": "Stefania",
    "surname": "Buri Mejia",
    "age": 30
}


/* ---- Probando FileSync--------
 const objetoJson = JSON.stringify(objeto);
 console.log(objetoJson);


fs.writeFileSync('./objeto.json', JSON.stringify(objeto));
//console.log(JSON.parse(fs.readFileSync('./objeto.json')));
try {
    const jsonString = fs.readFileSync('./objeto.json', 'utf-8');
    const objeto = JSON.parse(jsonString);
    console.log(objeto.name);
}catch (err){
    console.log(err);
}
*/


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
});




//------------RETO 3: solicitar datos por la consola-------
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




//----Preguntamos por la consola---OPCION 2
/*
var preguntas=['¿Cual es tu nombre?:',
                '¿Cuales son tus apellidos?:',
                '¿Que edad tienes?:'];
var respuestas = [];

function pregunta(i){
    process.stdout.write(preguntas[i]);
}

process.stdin.on('data', function(data){
    respuestas.push(data.toString().trim());

    if(respuestas.length<preguntas.length){
        pregunta(respuestas.length)
    }else{
        process.exit();
    }
});


pregunta(0);
*/










