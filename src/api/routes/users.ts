/* Controllers */
import * as Auth from 'controllers/Auth'
import * as User from 'controllers/User'

/* Validator */
import * as Validator from '../middlewares/validator'

import { Router } from "express"

const { userValidationRules, validate } = Validator

export default (router: Router) => {
    
    // app.use('/users', app)

    // Authentication
    router.post('/signup', userValidationRules(), validate, Auth.signup)

    /* USERS ROUTE */
    router.route('/users')
        .get(User.getAllUsers)
}


