'use strict';

const fs = require('fs');
const app = require('./app');

let read = { 
    //异步读取普通文件
    readFile: (url) => {
        fs.readFile(url,'utf-8', (err,data)=>{
            if (err) {
                console.log('异步读取普通文件:',err);
            } else {
                console.log('异步读取普通文件:',data);
            }
        })
    },

    //异步读取图片文件
    readImg: (url) => {
        fs.readFile(url,(err,data)=>{
            if (err) {
                console.log('异步读取图片文件:',err);
            } else {
                console.log('异步读取图片文件:',data);
                console.log('字节：',data.length + 'bytes')
            }
        })
    },

    //同步读取普通文件
    readFileSync: (url) => {
        try {
            let data = fs.readFileSync(url,'utf-8');
            console.log('同步读取普通文件:',data);
        } catch (error) {
            console.log('同步读取普通文件:',error);
        }
    },
}

// read.readFile(app.url)

module.exports = read;