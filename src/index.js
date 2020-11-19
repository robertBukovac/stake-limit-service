const Server = require('./server');

require('dotenv-flow').config();

const port = process.env.APP_PORT || 8001; 

const server = new Server(port);

server.start(port);
