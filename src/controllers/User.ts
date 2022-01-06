import handle from 'middlewares/handle'
import User from 'models/User'

import { Request, Response } from "express"


export const getAllUsers = handle(async (req: Request, res: Response): Promise<any> => {
        const users = await User.find({})

        res.json({ users })
    })
