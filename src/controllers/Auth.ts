import User from '../models/User.js'
import handle from '.././api/middlewares/handle.js'

import { Request, Response, NextFunction } from "express"



export const signup =  handle(async (req: Request, res: Response): Promise<any> => {
        const user = await User.create(req.body)

        res.json({ user })
    })
