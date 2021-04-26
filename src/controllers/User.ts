import handle from 'middlewares/handle'
import User from 'models/User'

import { Request, Response } from "express"

module.exports = {
    getAllUsers: handle(async (req: Request, res: Response) => {
        const users = await User.find({})

        res.json({ users })
    })
}