import { UsersRepository } from "@modules/accounts/infra/Repositories/Repositories/UsersRepository";
import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import { verify } from "jsonwebtoken";
import { AppError } from "@shared/error/AppError";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authToken = request.headers.authorization; // recebe o dado via header
  if (!authToken) {
    return response.status(401).json({message: 'Token is missing!'});
  }
  
  // a virgula ignora a primeira parte do token pegando so o codigo
  const [, token] = authToken.split(" "); // divide a string pelo space
  
  try {
    // verifico se o token e valido
    const { sub: user_id } = verify(
      token,
      "40fe3ccb6f87eb4cf80f3c5dda631e2f", // chave de criptografia
    ) as IPayload; // retorna um Ipayload

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new AppError("User don't exists!", 401);
    }
    next();
  } catch {
    throw new AppError("Invalid token!", 401);
  }
}
