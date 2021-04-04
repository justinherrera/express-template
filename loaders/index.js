const server = require('./server')
const connection = require('./mongoose')

module.exports = (app) => {
  server(app);
  connection();

  // ... more loaders can be here
}