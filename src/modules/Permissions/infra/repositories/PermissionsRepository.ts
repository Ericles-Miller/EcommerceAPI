import { Permission, PrismaClient } from "@prisma/client";

import {
  IPermissionsRepository,
  PermissionRequest,
} from "./IPermissionsRepository";

export class PermissionsRepository implements IPermissionsRepository {
  private repository = new PrismaClient().permission;

  async create({ name, description }: PermissionRequest): Promise<void> {
    await this.repository.create({
      data: {
        name,
        description,
      },
    });
  }

  async list(): Promise<Permission[]> {
    const permissions = await this.repository.findMany();

    return permissions;
  }

  async listPermissionByName(name: string): Promise<Permission | null> {
    const permission = await this.repository.findFirst({
      where: {
        name,
      },
    });

    return permission;
  }
}
