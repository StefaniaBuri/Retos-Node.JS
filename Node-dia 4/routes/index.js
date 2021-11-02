//----------RETO 1-API REST-------
const { Router} = require("express");
//const { isNull } = require("underscore");
const router = Router();
const _ = require('underscore');
exports.__esModule = true;
var Professional_1 = require("../../../MiniProyecto/IMDB/IMDB-FINAL/Professional");

const data = [
    professional1 = new Professional_1.Professional("Ana", 28, "mujer", 60, 165, "castaño", "azúl", "española", false, "española", 1, "actriz"),
    professional2 = new Professional_1.Professional("Sara", 34, "mujer", 60, 165, "castaño", "azúl", "española", false, "española", 1, "actriz"),
    professional3 = new Professional_1.Professional("Pedro", 18, "hombre", 60, 165, "castaño", "azúl", "española", false, "española", 1, "actor"),
    professional4 = new Professional_1.Professional("Juan", 28, "mujer", 60, 165, "castaño", "azúl", "española", false, "española", 1, "director"),
    // professional5 = new Professional_1.Professional("Roberto", 34, "mujer", 60, 165, "castaño", "azúl", "española", false, "española", 1, "director"),
    // professional6 = new Professional_1.Professional("Marco", 18, "hombre", 60, 165, "castaño", "azúl", "española", false, "española", 1, "writer"),
    // professional7 = new Professional_1.Professional("María", 68, "mujer", 60, 165, "castaño", "negro", "española", false, "española", 1, "writer"),
   ];
   

router.get('/profesional', (req, res) => {
    
    let respuesta;
    if (data != null){
        respuesta = data
    }
    else{
        respuesta = {error: true, codigo: 200, mensaje: "El profesional no existe"}
    }

    res.send(respuesta);
});


router.post('/profesional', (req, res) => {
  
    const { name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarNumbers, profession } = req.body;

    if(name && age && genre && weight && height && hairColor && eyeColor && race && isRetired && nationality && oscarNumbers && profession) {
        const id = data.length + 1;
        const newProfessional = {...req.body, id};
        data.push(newProfessional);
        res.send(data);
    }else{
        let respuesta;
        if(name && age && genre && weight && height && hairColor && eyeColor && race && isRetired && nationality && oscarNumbers && profession === null){
            
            respuesta = {error: true, codigo: 200, mensaje: "El profesional ya existe"};
        }
        else{
            respuesta = {error: true, codigo: 200, mensaje: "There was an error"};
        }
        res.send(respuesta);
    }
    
});

router.put('/profesional/:id', (req, res) => {
    const {id} = req.params;
    const { name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarNumbers, profession } = req.body;

    if( name && age && genre && weight && height && hairColor && eyeColor && race && isRetired && nationality && oscarNumbers && profession){
        _.each(data, (datas, i) => {
            if(datas.id == id){
                datas.name = name;
                datas.age = age;
                datas.genre = genre;
                datas.weight = weight;
                datas.height = height;
                datas.hairColor = hairColor;
                datas.eyeColor = eyeColor;
                datas.race = race;
                datas.isRetired = isRetired;
                datas.nationality = nationality;
                datas.oscarNumbers = oscarNumbers;
                datas.profession = profession;
            }
        });
        res.send(data);
    }else{
        res.send({error: true, codigo: 200, mensaje: "There was an error"});
    }
});

router.delete('/profesional/:name', (req, res) => {
    const { name } = req.params;
     _.each(data, (datas, i) => {
         if(datas.name == name){
             data.splice(i, 1);
             res.send({error: false, codigo: 200, mensaje: 'Profesional borrado', resultado: data});
         }   
         
     });
 
 });



// Para eliminar con id

router.delete('/profesional/:id', (req, res) => {
   const { id } = req.params;
    _.each(data, (datas, i) => {
        if(datas.id == id){
            data.splice(i, 1);
        }
    });
    res.send(data);

});


//----------RETO 2- endpoints-------

router.get('/profesionales', (req, res) => {
    
    let respuesta;
    if (data != null){
        respuesta = data
    }
    else{
        respuesta = {error: true, codigo: 200, mensaje: "El profesional no existe"}
    }

    res.send(respuesta);
});

router.get('/profesionales/:id', (req, res) => {
    const {id} = req.params;
    
        _.each(data, (datas, i) => {
            if(datas.id == id){
                const newProfessional = {...req.body, id};
                res.send({error: true, codigo: 200, mensaje: "El profesional es : ", resultado: newProfessional});
            }
        });
        
});

router.post('/profesionales', (req, res) => {
  
    const { name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarNumbers, profession } = req.body;

    if(name && age && genre && weight && height && hairColor && eyeColor && race && isRetired && nationality && oscarNumbers && profession) {
        const id = data.length + 1;
        const newProfessional = {...req.body, id};
        data.push(newProfessional);
        res.send(data);
    }else{
        let respuesta;
        if(name && age && genre && weight && height && hairColor && eyeColor && race && isRetired && nationality && oscarNumbers && profession === null){
            
            respuesta = {error: true, codigo: 200, mensaje: "El profesional ya existe"};
        }
        else{
            respuesta = {error: true, codigo: 200, mensaje: "There was an error"};
        }
        res.send(respuesta);
    }
    
});

router.put('/profesionales/:id', (req, res) => {
    const {id} = req.params;
    const { name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarNumbers, profession } = req.body;

    if( name && age && genre && weight && height && hairColor && eyeColor && race && isRetired && nationality && oscarNumbers && profession){
        _.each(data, (datas, i) => {
            if(datas.id == id){
                datas.name = name;
                datas.age = age;
                datas.genre = genre;
                datas.weight = weight;
                datas.height = height;
                datas.hairColor = hairColor;
                datas.eyeColor = eyeColor;
                datas.race = race;
                datas.isRetired = isRetired;
                datas.nationality = nationality;
                datas.oscarNumbers = oscarNumbers;
                datas.profession = profession;
            }
        });
        res.send(data);
    }else{
        res.send({error: true, codigo: 200, mensaje: "There was an error"});
    }
});

router.delete('/profesionales/:name', (req, res) => {
    const { name } = req.params;
     _.each(data, (datas, i) => {
         if(datas.name == name){
             data.splice(i, 1);
             res.send({error: false, codigo: 200, mensaje: 'Profesional borrado', resultado: data});
         }   
         
     });
 
 });



module.exports = router;

