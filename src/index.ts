require('module-alias/register')
import loaders from '../src/loaders'
import config from '../src/config'

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