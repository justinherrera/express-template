/* Controllers */
const User = require('../../controllers/User')

const { signup } = User

module.exports = (app) => {
    
    app.use('/users', app)
    
    app.get('/test', (req, res) => res.send('Working Route'))
    app.post('/signup', User.signup)
}


