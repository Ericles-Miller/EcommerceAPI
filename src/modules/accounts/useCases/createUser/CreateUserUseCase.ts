import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../infra/Repositories/IUsersRepositories";
import { UsersRepository } from "../../infra/Repositories/Repositories/UsersRepository";
import { IRequestDTO } from "../../infra/DTOs/IRequestDTO";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject(UsersRepository)
    private usersRepository: IUsersRepository
  ) {}

  async execute({email,name,password}: IRequestDTO) : Promise<void> {
    
  }
}