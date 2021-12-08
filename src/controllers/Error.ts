import { NextFunction, Request, Response } from "express"

interface Error {
    statusCode: number,
}

export default (err: String, req: Request, res: Response, next: NextFunction) => {


}
