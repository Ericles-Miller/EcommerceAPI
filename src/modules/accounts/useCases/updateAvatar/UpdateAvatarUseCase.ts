import { IUsersRepository } from "@modules/accounts/infra/Repositories/IRepositories/IUsersRepositories";
import { UsersRepository } from "@modules/accounts/infra/Repositories/UsersRepository";
import { inject } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

export class UpdateAvatarUseCase {
  constructor(
    @inject(UsersRepository)
    private usersRepository: IUsersRepository,
  ) {}

  async execute(id: string, avatar: string): Promise<void> {
    const findUser = await this.usersRepository.findById(id);
    if (!findUser) {
      throw new AppError("UserId does not exists!");
    }

    await this.usersRepository.updateAvatar(avatar, id);
  }
}
