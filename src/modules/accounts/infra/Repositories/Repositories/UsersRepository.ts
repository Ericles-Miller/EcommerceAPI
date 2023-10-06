import { PrismaClient } from "@prisma/client";
import { IRequestDTO } from "../../DTOs/IRequestDTO";
import { IUsersRepository } from "../IUsersRepositories";


export class UsersRepository implements IUsersRepository {
  private repository = new PrismaClient().users;
  
  create(data: IRequestDTO): Promise<void> {
    throw new Error("Method not implemented.");
  }

}