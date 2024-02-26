import { IUsersRepository } from "@modules/accounts/infra/Repositories/IRepositories/IUsersRepositories";
import { UsersRepository } from "@modules/accounts/infra/Repositories/UsersRepository";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
export class UpdateAvatarUseCase {
  constructor(
    @inject(UsersRepository)
    private usersRepository: IUsersRepository,
  ) {}

  async execute(id: string, avatar: string): Promise<void> {
    const findUser = await this.usersRepository.findById(id);
    if (!findUser) {
      throw new AppError("users does not exists!", 401);
    }

    await this.usersRepository.updateAvatar(avatar, id);
  }
}
