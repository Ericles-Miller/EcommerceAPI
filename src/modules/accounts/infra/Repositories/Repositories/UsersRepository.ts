import { PrismaClient } from "@prisma/client";

import { IRequestCreateUserDTO } from "../../DTOs/IRequestDTO";
import { IUsersRepository } from "../IUsersRepositories";

export class UsersRepository implements IUsersRepository {
  private repository = new PrismaClient().users;

  async create({
    email,
    password,
    name,
    addressId,
    createdAt,
  }: IRequestCreateUserDTO): Promise<void> {
    await this.repository.create({
      data: {
        name,
        password,
        email,
        addressId,
        createdAt,
      },
    });
  }
}
