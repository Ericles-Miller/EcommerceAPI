import { IUsersRepository } from "@modules/accounts/infra/Repositories/IRepositories/IUsersRepositories";
import { UsersRepository } from "@modules/accounts/infra/Repositories/UsersRepository";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
export class DisableEnableUserUseCase {
  constructor(
    @inject(UsersRepository)
    private usersRepository: IUsersRepository,
  ) {}

  async execute(id: string, option: boolean): Promise<void> {
    const findUser = await this.usersRepository.findById(id);
    if (!findUser) {
      throw new AppError("UserId does not exists!", 404);
    }

    await this.usersRepository.disableEnableUser(id, option);
  }
}
