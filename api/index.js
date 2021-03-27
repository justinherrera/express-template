const users = require('./routes/users')

const express = require('express');

module.exports = () => {
    const router = express.Router()

    users(router)
    // routes here ...
    
    return router
}