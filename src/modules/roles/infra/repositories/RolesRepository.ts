import { PrismaClient, Role } from "@prisma/client";

import { RoleRequest } from "../types/RoleRequest";
import { IRolesRepository } from "./iRepositories/IRolesRepository";

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

  async listRoleByName(name: string): Promise<Role> {
    const role = await this.repository.findFirst({
      where: {
        name,
      },
    });

    return role;
  }
}
