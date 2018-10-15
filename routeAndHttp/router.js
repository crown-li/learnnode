const fs = require('fs');

function route(handle,pathName,response,params){
    console.log('routing a request for ' + pathName)
    if(typeof handle[pathName] === 'function'){
        handle[pathName](response,pathName,params);
    }else{
        console.log('No handle for ' + pathName);
        response.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/module/error.html','utf8').pipe(response);
    }
}

module.exports = {
    route
}