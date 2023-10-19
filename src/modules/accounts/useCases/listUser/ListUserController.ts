import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListUserUseCase } from "./ListUserUseCase";

export class ListUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listUsersUseCase = container.resolve(ListUserUseCase);

    const users = await listUsersUseCase.execute();

    return response.json(users);
  }
}
