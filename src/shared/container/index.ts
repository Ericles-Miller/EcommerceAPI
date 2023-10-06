import { container } from "tsyringe";
import { IUsersRepository } from "../../modules/accounts/infra/Repositories/IUsersRepositories";
import { UsersRepository } from "../../modules/accounts/infra/Repositories/Repositories/UsersRepository";



container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
)