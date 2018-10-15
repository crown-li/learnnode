'use strict';

const fs = require('fs');
const app = require('./app');

let stream = {

    //流读文件
    readStream: (url) => {
        let rs = fs.createReadStream(url,'utf-8');

        rs.on('data',(chunk) => {
            console.log('DATA:',chunk);
        })

        rs.on('end',()=>{
            console.log('END');
        })

        rs.on('error',(err) => {
            console.log(err);
        })
    },

    //流写文件
    writeStream: (url,data) => {
        let ws = fs.createWriteStream(url,'utf-8');

        ws.write(data)
        ws.write(' END')
        ws.end();
    },

    //串联
    pipe: (read_url,write_url) => {
        let rs = fs.createReadStream(read_url,'utf-8');
        let ws = fs.createWriteStream(write_url,'utf-8');
        
        rs.pipe(ws)
    },

}

stream.pipe(app.url2,app.url);

module.exports = stream;