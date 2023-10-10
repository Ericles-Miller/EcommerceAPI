import { PrismaClient } from "@prisma/client";
import { IRequestDTO } from "../../DTOs/IRequestDTO";
import { IUsersRepository } from "../IUsersRepositories";


export class UsersRepository implements IUsersRepository {
  private repository = new PrismaClient().users;
  
  async create({email,password,name, avatar}: IRequestDTO): Promise<void> {
    await this.repository.create({
      data: {
        name, password,email,avatar
      }
    })
  }

}