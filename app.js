//const http = require('http');
//const url = require('url');
//const fs = require('fs');
//const path = require('path');
//const _ = require('lodash');

const exp = require('constants');
const express = require('express');

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


let randomNum1 = _.random(10);
let randomNum2 = _.random(1,100);

console.log(randomNum1);
console.log(randomNum2);

let myArr = ['apple','orenge','banana','bule berry','grape'];
let randomItem = _.sample(myArr);
console.log(myArr)
console.log(randomItem);
console.log(_.shuffle(myArr));
// console.log(_.shuffl(myArr));
let counter = 0;
_.times(5,function(){
    counter++;
    console.log(counter);
});
let arr2 =_.map(myArr ,function(item){
    console.log(item);
    return item.toUpperCase();
});

console.log(arr2);
console.log(_.map(myArr,_.camelCase));
console.log(_.map(myArr,_.capitalize));
console.log(_.map(myArr,_.upperCase));

let arr3 = _.map(myArr, function(e){
     return _.startsWith(e,'b');

});
console.log(arr3);

let arr4 = _.map(myArr, function(e){
    return _.endsWith(e,'e');
});
console.log(arr4);

myArr.forEach(function(e){
    if(_.endsWith(e,'e')){
        console.log(e);
    }
});
// lesson 7
*/

const app = express();
const port = 8080;
/*
app.get('/', function(req ,res){
    res.send('Hello World');
});

app.get('/foo', function(req ,res){
    res.send("<h1>Foo Page</h1>");
});

app.listen(port ,function(){
    return console.log('port' +port);
}); */

//app.use(expreess.static(__dirname));
/*
app.use(express.static(__dirname));

const users = [
    {user:'Launrence',pass:'password'},
    {user:'Jane',pass:'secreat'},
    {user:'Joe',pass:'pass'},
    {user:'Linda',pass:'xxxxpass'}
];

app.get('/users', function(req ,res){
    res.send(users);
});



const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extends :true
}));
app.use(bodyParser.json()); //for parsing json
app.use(express.static(__dirname+ '/public'));

app.get('/' ,function(req ,res){
    res.sendFile('index.html');
}); 

app.post('/login', function(req ,res){
    let userName = req.body.user;
    let passWord = req.body.pass;
    console.log(userName +' '+ passWord);
    
    res.json({stsatus : true});
});

app.listen(port, function(){
    return console.log('port is '+port);
}); 
// leasson 10
*/
const http = require('http').Server(app);
const socket = require('socket.io')(http);
let players = [];

app.use(express.static(__dirname + '/public'));
app.get('/',function(req ,res){
    res.sendFile('index.html');
});

socket.on('connection',function(s){
    console.log('ready to use socket');
    s.on('new player', function(id, name){
        console.log(id);
        console.log(name);
        players.push({
            name : name,
            id : id
        });
        socket.emit('players',players);
    });
    socket.emit('players',players);
});

const server = http.listen(port, function(){
    console.log('ready' ,+ port);
});