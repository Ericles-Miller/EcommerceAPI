import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateOwnerUseCase } from "./CreateOwnerUseCase";

export class CreateOwnerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, cnpj, addressId, password, reputation } = request.body;

    const createOwnerUseCase = container.resolve(CreateOwnerUseCase);

    await createOwnerUseCase.execute({
      name,
      cnpj,
      addressId,
      password,
      reputation,
      email,
    });

    return response.status(201).send();
  }
}
