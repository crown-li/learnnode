const fs = require('fs');
const http = require('http');
const url = require('url');
const querystring = require('querystring');

/**
 * Content-Type:text/html
 * Content-Type:application/json
 */
function startServer(route,handle){
    let onRequest = (request,response) => {
        let pathname =  url.parse(request.url).pathname;
        let data = [];

        request.on('error',function(err){
            console.error(err)
        }).on('data',function(chunk){
            data.push(chunk);
        }).on('end',function(){
            if(request.method == 'POST'){
                if(data.length > 1e6){
                    request.connection.destroy();
                }
                //req在监听data事件时，获取到的chunk是Buffer实例,所以直接操作buffer，也可以用字符串字节累加
                data = Buffer.concat(data).toString();
                route(handle,pathname,response,querystring.parse(data));
            }else{
                let params = url.parse(request.url,true).query;
                route(handle,pathname,response,params);
            }
        })

        

    }

    http.createServer(onRequest).listen(8080,'127.0.0.1');
    console.log('server started on 127.0.0.1 port 8080')
}

module.exports = {
    startServer
}