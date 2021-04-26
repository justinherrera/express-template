import users from './routes/users'

import express from "express"


const router = express.Router()

users(router)
// routes here ...
    
export default router
