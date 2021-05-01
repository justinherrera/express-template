import users from './routes/users'

import { Router } from "express"


const router = Router()

users(router)
// routes here ...
    
export default router
