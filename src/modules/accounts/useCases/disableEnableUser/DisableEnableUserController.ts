import { Request, Response } from "express";
import { container } from "tsyringe";

import { DisableEnableUserUseCase } from "./DisableEnableUserUseCase";

export class DisableEnableUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { option } = request.body;
    const disableEnableUserUseCase = container.resolve(
      DisableEnableUserUseCase,
    );

    await disableEnableUserUseCase.execute(id, option);

    return response.status(201).send();
  }
}
