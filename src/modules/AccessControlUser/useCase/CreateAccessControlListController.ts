import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateAccessControlListUseCase } from "./CreateAccessControlListUseCase";

export class CreateAccessControlListController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { permissions, roles } = request.body;
    const { userId } = request.params;

    const createAccessControlListUseCase = container.resolve(
      CreateAccessControlListUseCase,
    );

    await createAccessControlListUseCase.execute({
      permissions,
      roles,
      userId,
    });

    return response.status(201).send();
  }
}
