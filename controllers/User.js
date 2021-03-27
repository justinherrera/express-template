const bcrypt = require('bcrypt');

const UserService = require('../services/UserService')
const handle = require('../api/middlewares/handle')

module.exports = {
    signup: handle(async (req, res) => {
        console.log(req.body)
        const userRequest = {
            name: req.body.name,
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, 12)
        }

        console.log(userRequest)

        const authServiceInstance = new UserService()

        const userData = await authServiceInstance.Signup(userRequest)

        return res.json({
            userData,
        })
    })
}