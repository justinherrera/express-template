import bodyParser from 'body-parser'
import cors from 'cors'
import config from '../config/index'
import routes from '../api/index'
import error from 'controllers/Error'
import morgan from 'morgan'

import express, { Application } from 'express'

const server = (app: Application) => {

  app.get('/status', (req, res) => { res.status(200).end(); });
  app.head('/status', (req, res) => { res.status(200).end(); });
  app.enable('trust proxy');

  app.use(cors());
  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }))

  // API Routes
  app.use(config.prefix.api, routes)

  // Error Controller
  app.use(error);

  // ...More middlewares

  // Return the express app
  return app;
}

export default server