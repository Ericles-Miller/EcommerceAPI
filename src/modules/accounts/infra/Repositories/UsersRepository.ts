import { PrismaClient, User } from "@prisma/client";

import { IRequestCreateUserDTO } from "../DTOs/IRequestDTO";
import { IUpdateUserDTO } from "../DTOs/IUpdateUserDTO";
import { IUsersRepository } from "./IRepositories/IUsersRepositories";

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

  async updateUser({ id, name, password }: IUpdateUserDTO): Promise<void> {
    await this.repository.update({
      where: { id },
      data: {
        name,
        password,
      },
    });
  }
  async disableEnableUser(id: string, option: boolean): Promise<void> {
    await this.repository.update({
      where: { id },
      data: {
        active: option,
      },
    });
  }

  async updateAvatar(avatar: string, id: string): Promise<void> {
    await this.repository.update({
      where: { id },
      data: {
        avatar,
      },
    });
  }
}
