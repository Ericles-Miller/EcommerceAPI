import { Request, Response } from "express";
import { container } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

import { UpdateAvatarUseCase } from "./UpdateAvatarUseCase";

export class UpdateAvatarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const updateAvatarUseCase = container.resolve(UpdateAvatarUseCase);
    const { id } = request.params;
    const { displayImgs } = request.files as Record<string, MulterFile>;
    if (!displayImgs) {
      throw new AppError("Image File is missing!");
    }
    const avatarString = "";
    await updateAvatarUseCase.execute(id, avatarString);

    return response
      .status(201)
      .json({ message: "UPdate Avatar is completed!" });
  }
}