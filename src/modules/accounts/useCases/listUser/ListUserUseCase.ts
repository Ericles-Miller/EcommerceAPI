import { IUsersRepository } from "@modules/accounts/infra/Repositories/IRepositories/IUsersRepositories";
import { UsersRepository } from "@modules/accounts/infra/Repositories/UsersRepository";
import { User } from "@prisma/client";
import { inject, injectable } from "tsyringe";

@injectable()
export class ListUserUseCase {
  constructor(
    @inject(UsersRepository)
    private usersRepository: IUsersRepository,
  ) {}

  async execute(): Promise<User[]> {
    const users = await this.usersRepository.list();
    return users;
  }
}
