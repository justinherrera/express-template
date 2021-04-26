import { Request, Response } from "express"

const error = (err: String, req: Request, res: Response) => {
    try {
        console.log('error middleware')
        console.log(err)

    } catch(err) {
        res.status(500).send('Unknown Error')
    }
}

export default error