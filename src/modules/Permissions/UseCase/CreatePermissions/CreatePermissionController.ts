import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreatePermissionsUseCase } from "./CreatePermissionsUseCase";

export class CreatePermissionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const createPermissionsUseCase = container.resolve(
      CreatePermissionsUseCase,
    );

    await createPermissionsUseCase.execute({ name, description });

    return response.status(201).send();
  }
}
