import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticateOwnerUseCase } from "./AuthenticateOwnerUseCase";

export class AuthenticateOwnerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateOwnerUseCase = container.resolve(
      AuthenticateOwnerUseCase,
    );

    const token = await authenticateOwnerUseCase.execute(email, password);

    return response.json(token);
  }
}
