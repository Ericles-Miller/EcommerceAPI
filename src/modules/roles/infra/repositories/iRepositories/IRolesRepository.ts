import { Role } from "@prisma/client";

import { RoleRequest } from "../RolesRepository";

export interface IRolesRepository {
  create({ description, name }: RoleRequest): Promise<void>;
  listRoles(): Promise<Role[]>;
  listRoleByName(name: string): Promise<Role>;
}
