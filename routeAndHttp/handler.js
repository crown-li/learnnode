const fs = require('fs');

// function home(response,pathName){
//     console.log('Executing ‘home’ handle');
//     response.writeHead(200,{'Content-Type':'text/html'});
//     fs.createReadStream(__dirname + '/module/index.html','utf8').pipe(response);
// }

// function review(response,pathName){
//     console.log('Executing ‘review’ handle');
//     response.writeHead(200,{'Content-Type':'text/html'});
//     fs.createReadStream(__dirname + '/module' + pathName +'.html','utf8').pipe(response);
// }

// function error(response,pathName){
//     console.log('Executing ‘error’ handle');
//     response.writeHead(200,{'Content-Type':'text/html'});
//     fs.createReadStream(__dirname + '/module' + pathName +'.html','utf8').pipe(response);
// }

function common(response,pathName,params){
    if(pathName == '/'){
        pathName = '/index'
    }

    if(pathName == '/api_record'){
        response.writeHead(200,{'Content-Type':'application/json'});
        response.end(JSON.stringify(params));
        return
    }

    let path_name = pathName;

    function first(){
        (function(){
            console.log('Executing ' + path_name +' handle');
            response.writeHead(200,{'Content-Type':'text/html'});
            fs.createReadStream(__dirname + '/module' + path_name +'.html','utf8').pipe(response);
        })()
    }

    first();

}

module.exports = {
    // home,
    // review,
    // error,
    common
}