import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "@shared/errors/AppError";

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authToken = request.headers.authorization; // recebe o dado via header
  if (!authToken) {
    return response.status(401).json({ message: "Token is missing!" });
  }

  const [, token] = authToken.split(" ");

  try {
    // verifico se o token e valido
    verify(token, "40fe3ccb6f87eb4cf80f3c5dda631e2f"); // chave de criptografia
    return next();
  } catch (error) {
    throw new AppError("Invalid token!", 401);
  }
}
