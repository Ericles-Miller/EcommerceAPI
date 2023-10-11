import 'reflect-metadata';
import { router } from "./routers";

import express, { NextFunction, Request, Response } from 'express';
import { AppError } from '@shared/error/AppError';

export const app = express();
app.use(express.json());


/* middle error */
app.use((err:Error, request:Request, response:Response, next:NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
    });
  }
  console.log(err);
  return response.status(500).json({
    status: 'error',
    message: `Internal server error - ${err.message}`,
  });
});

app.use(router);


