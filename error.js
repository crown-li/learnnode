'use strict';

function error(err){
    const EventEmitter = require('events').EventEmitter;
    const emitter = new EventEmitter();

    emitter.on('error',(err)=>{
        console.error('出错：' + err.message)
    })
    
    emitter.emit('error',new Error(err))
    
}


function _MyFatalException(err){
    if(!process.emit('uncaughtException',err)){
        console.error(err.stack);
        process.emit('exit',1);
    }
}

module.exports = error;

