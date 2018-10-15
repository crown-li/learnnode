const server = require('./server');
const router = require('./router');
const handler = require('./handler');

let handle = {};

// handle['/'] = handler.home;
// handle['/home'] = handler.home;
// handle['/review'] = handler.review;
// handle['/error'] = handler.error;

handle['/'] = handler.common;
handle['/index'] = handler.common;
handle['/review'] = handler.common;
handle['/error'] = handler.common;
handle['/api_record'] = handler.common;


server.startServer(router.route,handle)