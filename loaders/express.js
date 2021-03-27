const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('../config')
const routes = require('../api')

module.exports = (app) => {

  app.get('/status', (req, res) => { res.status(200).end(); });
  app.head('/status', (req, res) => { res.status(200).end(); });
  app.enable('trust proxy');

  app.use(cors());
  app.use(require('morgan')('dev'));
  app.use(bodyParser.json());

  // API Routes
  app.use(config.prefix.api, routes())
  // ... More routes



  // ...More middlewares

  // Return the express app
  return app;
}