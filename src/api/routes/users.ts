/* Controllers */
import { signup } from '../../controllers/Auth.js'
import { getAllUsers } from '../../controllers/User.js'

/* Validator */
import { userValidationRules, validate } from '../middlewares/validator.js'

import { Request, Response, Router } from "express"


export default (app: Router) => {
    
    app.use('/users', app)
    
    app.get('/test', (req: Request, res: Response) => res.send('Working Route'))

    // Authentication
    app.post('/signup', userValidationRules(), validate, signup)

    // Users
    app.get('/', getAllUsers)
}


