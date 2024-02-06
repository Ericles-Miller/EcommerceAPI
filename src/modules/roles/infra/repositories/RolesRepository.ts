import { PrismaClient, Role } from "@prisma/client";

import { IRolesRepository } from "./iRepositories/IRolesRepository";

export type RoleRequest = {
  name: string;
  description: string;
};

export class RolesRepository implements IRolesRepository {
  private repository = new PrismaClient().role;

  async create({ description, name }: RoleRequest): Promise<void> {
    await this.repository.create({
      data: {
        name,
        description,
      },
    });
  }
  async listRoles(): Promise<Role[]> {
    const roles = await this.repository.findMany();
    return roles;
  }
}
