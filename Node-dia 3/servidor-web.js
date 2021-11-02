//---------------RETO 1---------------------

//--------PUNTO 1-2 -----------

const http = require('http');


const server = http.createServer(function(request, response){
    console.log('Petición recibida del cliente');
    console.log("Header Request: " + request.headers.host);
    console.log("Request Method: "+ request.method);
    console.log("Request URL: "+ request.url);
    console.log("Response Status code: " + response.statusCode);

    //------------PUNTO 3----------------
    console.log("Header Content-Length: "+ request.headers['content-length']);
    console.log("Header User-agent: "+ request.headers['user-agent']);
    console.log("Header Content-Type: "+ request.headers['content-type']);
    
    //---------PUNTO 4 -----------
    response.writeHead(200, {'Content-type': 'application/json'});
    
   
    if(request.url=="/bye"){
            response.writeHead(200, {'Content-type': 'application/json'});
            response.write(`{ok: true, message:'adios!'}`);
            }  else{
                response.write(`{ok: true, message:'Recibido!'}`);
            }
     response.end(); 
});

server.listen(3000);





