const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


class Server {
  constructor() {
    this.server = express();
  }

  setMiddlewares() {
    this.server.use(morgan('dev'));
    this.server.use(cors());
  }

  setRouters() {
    
  }

  start(port) {
    this.server.listen(port, () => {
      this.setMiddlewares();
      this.setRouters();
      console.log(`Server listening on port ${port}`);
    });
  }
}

module.exports = Server;