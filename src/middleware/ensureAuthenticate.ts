import { UsersRepository } from "@modules/accounts/infra/Repositories/Repositories/UsersRepository";
import { Request, Response, NextFunction } from "express";

import { AppError } from "@shared/error/AppError";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization; // recebe o dado via header
  if (!authHeader) {
    throw new AppError("Token missing!", 401);
  }
  // a virgula ignora a primeira parte do token pegando so o codigo
  const [, token] = authHeader.split(" "); // divide a string pelo space
  try {
    // verifico se o token e valido
    const { sub: user_id } = verify(
      token,
      "8125b713a009a54b465f2f029ea632e2", // chave de criptografia
    ) as IPayload; // retorna um Ipayload

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new AppError("User don't exists!", 401);
    }
    next();
  } catch {
    throw new AppError("Invlid token!", 401);
  }
}
