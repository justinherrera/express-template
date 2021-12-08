import { NextFunction, Request, Response } from "express"

interface Error {
    statusCode: number
    status: string
    message: string
    stack: string
}

const sendErrorDev = (err: Error, req: Request, res: Response) => {
    return res.status(err.statusCode).json({
        status: err.status,
        error: err,
        message: err.message,
        stack: err.stack
    });   
};

const error = (err: Error, req: Request, res: Response, next: NextFunction) => {

    console.log(process.env.ENVIRONMENT === 'development')

    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error'

    sendErrorDev(err, req, res);

}

export default error