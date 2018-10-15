'use strict';

const fs = require('fs');
const app = require('./app');
const read = require('./read');
const fileInfo = require('./fileInfo');


let write = {
    //异步写入文件
    writeFile: (url,data) => {
        fs.writeFile(url,data,(err)=>{
            if(err){
                console.log(err);
            }else{
                console.log('异步写入文件成功')
                read.readFile(url);
                fileInfo.stat(url)
            }
        })
    },

    //同步写入文件
    writeFileSync: (url,data) => {
        try {
            fs.writeFileSync(url,data);
            console.log('同步写入文件成功')
            read.readFile(url);
        } catch (error) {
            console.log(error);
        }
        
    },
};


write.writeFileSync(app.url,app.data)

module.exports = write;