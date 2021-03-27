const mongoose = require('mongoose')
const config = require('../config')

module.exports =  async () => {
    return await mongoose.connect(config.databaseURL, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true    
    })
    .then(_ => console.log('DB Connected'))
    .catch(_ => console.log('Connection Failed'))
    //   return connection.connection.db;
}