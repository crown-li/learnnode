'use strict';

const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
const app = require('./app');
const error = require('./error');

console.log('__filename',__filename);
console.log('__dirname',__dirname);

let root = path.resolve();//__dirname

let server = http.createServer((request,response)=>{

    let filepath = process.argv[2] != undefined ? (root + '/' + process.argv[2]) :  __filename

    fs.stat(filepath,(err,stats)=>{
        if(!err && stats.isFile()){
            console.log('200' + request.url);
            response.writeHead(200);
            fs.createReadStream(filepath).pipe(response);
        }else{
            console.log('404' + request.url);
            response.writeHead(404);
            response.end('404 Not Found');
            error(err);
        }
    })

})
server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');