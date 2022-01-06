import User from 'models/User'
import handle from 'middlewares/handle'

import { Request, Response, NextFunction } from "express"



export const signup =  handle(async (req: Request, res: Response): Promise<any> => {
        const user = await User.create(req.body)

        res.json({ user })
    })
