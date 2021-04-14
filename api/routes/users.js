/* Controllers */
const Auth = require('controllers/Auth')
const User = require('controllers/User')

/* Validator */
const { userValidationRules, validate } = require('../middlewares/validator')


const { signup } = Auth
const { getAllUsers } = User

module.exports = (app) => {
    
    app.use('/users', app)
    
    app.get('/test', (req, res) => res.send('Working Route'))

    // Authentication
    app.post('/signup', userValidationRules(), validate, signup)

    // Users
    app.get('/', getAllUsers)
}


