require('module-alias/register')
const loaders = require('./loaders');
const config = require('./config');


const express = require('express');

// only export when running tests
module.exports = startServer = _ => {

  const app = express();

  loaders(app);

  app.listen(config.port, err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Server Running at ${config.port}`);
  });
}

// startServer()