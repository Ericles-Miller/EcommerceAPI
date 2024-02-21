import { Permission } from "@prisma/client";

export type PermissionRequest = {
  name: string;
  description: string;
};

export interface IPermissionsRepository {
  create({ name, description }: PermissionRequest): Promise<void>;
  list(): Promise<Permission[]>;
  listPermissionByName(name: string): Promise<Permission | null>;
}
