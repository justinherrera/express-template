const bcrypt = require('bcrypt');

const User = require('models/User')
const handle = require('middlewares/handle')

module.exports = {
    signup: handle(async (req, res) => {
        const user = await User.create(req.body)

        res.json({ user })
    })
}