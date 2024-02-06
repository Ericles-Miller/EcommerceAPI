import { IUpdateUserDTO } from "@modules/accounts/infra/DTOs/IUpdateUserDTO";
import { IUsersRepository } from "@modules/accounts/infra/Repositories/IRepositories/IUsersRepositories";
import { UsersRepository } from "@modules/accounts/infra/Repositories/UsersRepository";
import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
export class UpdateUserUseCase {
  constructor(
    @inject(UsersRepository)
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ id, name, password }: IUpdateUserDTO): Promise<void> {
    const user = await this.usersRepository.findById(id);
    if (!user) {
      throw new AppError("userId does not exists!");
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.updateUser({
      name,
      password: passwordHash,
      id,
    });
  }
}
