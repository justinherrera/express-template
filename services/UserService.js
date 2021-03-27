const User = require('../models/User')

module.exports = class UserService {

    async Signup(userData) {
        const user = await User.create(userData)

        return {
            user,
        }
    }

}