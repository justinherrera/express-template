const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const config = require('../config')
const routes = require('../api')
const error = require('../controllers/Error')

module.exports = (app) => {

  app.get('/status', (req, res) => { res.status(200).end(); });
  app.head('/status', (req, res) => { res.status(200).end(); });
  app.enable('trust proxy');

  app.use(cors());
  app.use(require('morgan')('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }))

  // API Routes
  app.use(config.prefix.api, routes())

  // Error Controller
  app.use(error);

  // ...More middlewares

  // Return the express app
  return app;
}