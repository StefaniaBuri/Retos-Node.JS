const fs = require('fs/promises');
const readline = require('readline');

//------------ Gestionar promesas Modulo FS ------------
//      THEN / CATCH
let objeto = {
    nombre: "Stefania",
    apellidos: "Buri",
    edad: 30
}


fs.writeFile('./objetoFs.json', JSON.stringify(objeto, null, 2))
.then( () => {
    return fs.readFile('objetoFs.json', 'utf-8')
})

.then( data => {
    console.log(JSON.parse(data));
})

.catch(err => {
        console.log(err);
});


//    ASYNC / AWAIT

async function asyncAwait (){
    await fs.writeFile('newObjeto.json', JSON.stringify(objeto))
    const nuevo = await fs.readFile('newObjeto.json', 'utf-8')
    console.log(JSON.parse(nuevo));
}

asyncAwait();


//Para el tratamiento de errores--- OPCION 2

async function asyncAwait (){

    try{
        await fs.writeFile('newObjeto.json', JSON.stringify(objeto))
        const nuevo = await fs.readFile('newObjeto.json', 'utf-8')
        console.log(JSON.parse(nuevo));
    }
    catch (error){
        console.log(error);
    }
}
asyncAwait();


//------------ Gestionar promesas Modulo ReadLine ------------

let preguntas = ['¿Cual es tu nombre?: ','¿Cuales son tus apellidos?:','¿Que edad tienes?:'];

function pregunta(){
    const question = new Promise((resolve, reject) =>{

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(preguntas[0], (respuesta) => {
            resolve(respuesta);
           
            rl.question(preguntas[1], (respuesta) => {
                resolve(respuesta);
                
                rl.question(preguntas[2], (respuesta) => {
                    resolve(respuesta);
                    rl.close();
                });
            });
        });
        
    })
    return question;
    
}

pregunta();                  


