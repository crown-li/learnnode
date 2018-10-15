'use strict';

const fs = require('fs');
const app = require('./app');

let fileInfo = {
    //异步文件信息
    stat:(url) => {
        fs.stat(url,(err,stat) => {
            if (err) {
                console.log(err);
            } else {
                console.log('文件信息：',stat)
            }
        })
    },
    
    //同步文件信息
    statSync:(url) => {
        try {
            let data = fs.statSync(url);
            console.log('文件信息：',data)
        } catch (error) {
            console.log(error)
        }
    }
}

fileInfo.statSync(app.url)

module.exports = fileInfo;