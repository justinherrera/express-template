import server from './server.js'
import connection from './mongoose.js'


import { Application } from 'express'

const connect = (app: Application) => {
  server(app);
  connection();

  // ... more loaders can be here
}

export default connect