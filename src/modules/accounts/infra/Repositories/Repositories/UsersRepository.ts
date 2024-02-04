import { PrismaClient, User } from "@prisma/client";

import { IRequestCreateUserDTO } from "../../DTOs/IRequestDTO";
import { IUsersRepository } from "../IUsersRepositories";

export class UsersRepository implements IUsersRepository {
  private repository = new PrismaClient().user;

  async create({
    email,
    password,
    name,
    addressId,
  }: IRequestCreateUserDTO): Promise<void> {
    await this.repository.create({
      data: {
        name,
        password,
        email,
        addressId,
      },
    });
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.repository.findUnique({
      where: { id },
    });

    return user;
  }

  async list(): Promise<User[]> {
    const users = await this.repository.findMany();
    return users;
  }

  async listUserByEmail(email: string): Promise<User | null> {
    const user = await this.repository.findFirst({
      where: {
        email,
      },
    });

    return user;
  }
}
