const loaders = require('./loaders');
const config = require('./config');


const express = require('express');

async function startServer() {

  const app = express();

  await loaders(app);

  app.listen(config.port, err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Server Running at ${config.port}`);
  });
}

startServer();