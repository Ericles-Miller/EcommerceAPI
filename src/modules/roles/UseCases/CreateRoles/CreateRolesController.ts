import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateRolesUseCase } from "./CreateRolesUseCase";

export class CreateRolesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const createRolesUseCase = container.resolve(CreateRolesUseCase);

    await createRolesUseCase.execute({ name, description });

    return response.status(201).send();
  }
}
