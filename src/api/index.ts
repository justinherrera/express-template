import users from './routes/users'

import { Router } from "express"


const router = Router()

router.get('/test', (req, res) => res.send('testing route ....') )

users(router)

// routes here ...
    
export default router
