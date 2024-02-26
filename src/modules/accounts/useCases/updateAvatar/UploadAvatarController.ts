import { Request, Response } from "express";
import { container } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

import { UpdateAvatarUseCase } from "./UpdateAvatarUseCase";

export class UpdateAvatarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { path } = request.file;

    const updateAvatarUseCase = container.resolve(UpdateAvatarUseCase);

    if (!path) {
      throw new AppError("Image File is missing!");
    }

    const avatarString = path;

    await updateAvatarUseCase.execute(id, avatarString);

    return response
      .status(201)
      .json({ message: "Update Avatar is completed!" });
  }
}
