
export module Logs {
  export class LogError extends Error {

    statusCode = 0
    status = ''
    isOperational = false

    error(message: string, statusCode: number): void {
      this.statusCode = statusCode
      this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
      this.isOperational = true;
      return Error.captureStackTrace(this, this.error);
    }

  }  
}
// class LogError extends Error {
//   constructor(message: string, statusCode: number) {
//     super(message);
      
//     this.statusCode = statusCode;
//     this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
//     this.isOperational = true;
      
//     Error.captureStackTrace(this, this.constructor);
//   }
// } 


  