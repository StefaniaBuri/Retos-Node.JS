//---------RETO 3----------------

const express = require('express');
const app = express();

app.get('/', function(request, response){
    
    console.log('Petición recibida del cliente');
    console.log("Request URL: "+ request.url);
    console.log("Request Method: "+ request.method);
    console.log("Header User-agent: "+ request.headers['user-agent']);
    console.log("Response Status code: " + response.statusCode);
    response.status(200)
    response.send(`{ok: true, message:'Recibido!'}`); 
    
});

app.get('/bye', function(request, response){

    console.log('Petición recibida del cliente');
    console.log("Request URL: "+ request.url);
    console.log("Request Method: "+ request.method);
    console.log("Header User-agent: "+ request.headers['user-agent']);
    console.log("Response Status code: " + response.statusCode);
    response.status(200)
    response.send(`{ok: true, message:'Adios!'}`);
    
});

app.listen(3000);