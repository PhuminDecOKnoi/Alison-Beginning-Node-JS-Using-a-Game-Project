const http = require('http');
http.createServer(function(request ,response){
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.end('Hello World');
    response.end();
}).listen(8080);