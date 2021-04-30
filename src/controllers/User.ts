import handle from 'middlewares/handle.js'
import User from 'models/User.js'

import { Request, Response } from "express"


export const getAllUsers = handle(async (req: Request, res: Response): Promise<any> => {
        const users = await User.find({})

        res.json({ users })
    })
