import { PrismaClient, Users } from "@prisma/client";

import { IRequestCreateUserDTO } from "../../DTOs/IRequestDTO";
import { IUsersRepository } from "../IUsersRepositories";

export class UsersRepository implements IUsersRepository {
  private repository = new PrismaClient().users;

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

  async findById(id: string): Promise<Users | null> {
    const user = await this.repository.findUnique({
      where: { id },
    });

    return user;
  }

  async list(): Promise<Users[]> {
    const users = await this.repository.findMany();
    return users;
  }

  async listUserByEmail(email: string): Promise<Users | null> {
    const user = await this.repository.findFirst({
      where: {
        email,
      },
    });

    return user;
  }
}
