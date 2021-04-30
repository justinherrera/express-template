// require('module-alias/register')
import moduleAlias from 'module-alias'

moduleAlias.addAliases({
  "controllers": `${__dirname}/src/controllers`,
  "models": `${__dirname}/src/models`,
  "middlewares": `${__dirname}/src/api/middlewares`
});

import loaders from './loaders/index.js'
import config from './config/index.js'

import express, { Application } from 'express'

// only export when running tests
const startServer = (): void => {

  const app: Application = express();

  loaders(app);

  app.listen(config.port, () => {
    console.log(`Server Running at ${config.port}`);
  });
}

startServer()