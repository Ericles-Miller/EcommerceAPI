import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateProductUseCase } from "./CreateProductUseCase";

export class CreateProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description, avatar, categoryId, stock, ownerId, price } =
      request.body;

    const createProductUseCase = container.resolve(CreateProductUseCase);

    await createProductUseCase.execute({
      avatar,
      categoryId,
      description,
      name,
      ownerId,
      price,
      stock,
    });

    return response.status(201).send();
  }
}
