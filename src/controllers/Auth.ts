const User = require('models/User')
const handle = require('middlewares/handle')
import { Request, Response, NextFunction } from "express"

module.exports = {
    signup: handle(async (req: Request, res: Response) => {
        const user = await User.create(req.body)

        res.json({ user })
    })
}