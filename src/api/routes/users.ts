/* Controllers */
import * as Auth from 'controllers/Auth.js'
import * as User from 'controllers/User.js'

/* Validator */
import * as Validator from '../middlewares/validator.js'

import { Router } from "express"

const { getAllUsers } = User
const { signup } = Auth
const { userValidationRules, validate } = Validator

export default (router: Router) => {
    
    // app.use('/users', app)

    // Authentication
    router.post('/signup', userValidationRules(), validate, signup)

    // Users
    router.route('/users')
        .get(getAllUsers)
}


