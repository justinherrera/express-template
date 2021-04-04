const bcrypt = require('bcrypt');

const handle = require('../api/middlewares/handle')
const User = require('../models/User')

module.exports = {
    getAllUsers: handle(async (req, res) => {
        const users = await User.find({})

        res.json({ users })
    })
}