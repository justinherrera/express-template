/* Controllers */
import Auth from 'controllers/Auth'
import User from 'controllers/User'

/* Validator */
import { userValidationRules, validate } from '../middlewares/validator'

import { Request, Response, Router } from "express"


const { signup } = Auth
const { getAllUsers } = User

export default (app: Router) => {
    
    app.use('/users', app)
    
    app.get('/test', (req: Request, res: Response) => res.send('Working Route'))

    // Authentication
    app.post('/signup', userValidationRules(), validate, signup)

    // Users
    app.get('/', getAllUsers)
}


