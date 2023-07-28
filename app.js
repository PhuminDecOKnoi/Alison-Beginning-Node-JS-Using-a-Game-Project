const http = require('http');
const url = require('url');
const fs = require('fs');
//const path = require('path');
/*
http.createServer(function(request ,response){
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.end('Hello World');
    response.end();
}).listen(8888);
// lesson 1st


function req(request, response){
    fs.readFile('index1.html', function(err, data){
        response.writeHead(200, {'Content-Type':'text/html'});
        response.write(data);
        response.end();
    });
}
http.createServer(req).listen(8888);
console.log('Server Starter');
// lesson 4

function req(request, response){
    // console.log(request,url);
    const base = url.parse(request.url);
    const pathname = base.pathname;
    console.log(pathname);

    response.writeHead(200, {'Content-Type':'text/html'});
    response.write('welcome');
    response.end();
}
http.createServer(req).listen(8888);
console.log('Server Starter');
// lesson 6
*/
function req(request, response){
    // console.log(request,url);
    const base = url.parse(request.url);
    const pathname = base.pathname;
    const fileName = './' + pathname;
    //const fileName = './';

    console.log(fileName);


    fs.readFile(fileName, function(err, data){
        if(err){
            response.writeHead(404,{'Content-Type':'text/html'});
            return response.end('<h1>Not found</h1>');
        }
        response.writeHead(200, {'Content-Type':'text/html'});
        response.write(data);
        return response.end();
    });
}

http.createServer(req).listen(8888);
console.log('Server Starter');
