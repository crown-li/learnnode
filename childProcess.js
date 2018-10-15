//exec方法用于新建一个子进程，然后缓存它的运行结果，运行结束后调用回调函数。
const exec = require('child_process').exec;

let child = exec('node -v');

//正常回调
child.stdout.on('data', data => {
    console.log('stdout:' + data)
});

//错误回调
child.stderr.on('data', data => {
    console.log('stderr:' + data)
});


child.on('close', code => {
    console.log('closeing code:' + code)
});
