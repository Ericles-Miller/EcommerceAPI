import "reflect-metadata";
import * as dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";

import { AppError } from "@shared/errors/AppError";

import { router } from "./routers";

import "@shared/container";

export const app = express();
app.use(express.json());
app.use(router);
dotenv.config();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, _: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError)
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });

  return res.status(500).json({
    status: "error",
    message: `Internal server error -> ${err.message}`,
  });
});
