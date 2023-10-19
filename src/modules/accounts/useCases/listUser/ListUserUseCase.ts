import { IUsersRepository } from "@modules/accounts/infra/Repositories/IUsersRepositories";
import { UsersRepository } from "@modules/accounts/infra/Repositories/Repositories/UsersRepository";
import { Users } from "@prisma/client";
import { inject, injectable } from "tsyringe";

@injectable()
export class ListUserUseCase {
  constructor(
    @inject(UsersRepository)
    private usersRepository: IUsersRepository,
  ) {}

  async execute(): Promise<Users[]> {
    const users = await this.usersRepository.list();
    return users;
  }
}
