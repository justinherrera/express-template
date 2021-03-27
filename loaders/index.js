const server = require('./express')
const connection = require('./mongoose')

module.exports = async (app) => {
  server(app);
  connection();


  // ... more loaders can be here
}