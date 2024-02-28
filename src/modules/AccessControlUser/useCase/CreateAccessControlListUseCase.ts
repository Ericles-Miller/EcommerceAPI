import { IUsersRepository } from "@modules/accounts/infra/Repositories/IRepositories/IUsersRepositories";
import { UsersRepository } from "@modules/accounts/infra/Repositories/UsersRepository";
import { IPermissionsRepository } from "@modules/Permissions/infra/repositories/IPermissionsRepository";
import { PermissionsRepository } from "@modules/Permissions/infra/repositories/PermissionsRepository";
import { IRolesRepository } from "@modules/roles/infra/repositories/iRepositories/IRolesRepository";
import { RolesRepository } from "@modules/roles/infra/repositories/RolesRepository";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

export interface IUserACLRequest {
  userId: string;
  roles: string[];
  permissions: string[];
}

@injectable()
export class CreateAccessControlListUseCase {
  constructor(
    @inject(UsersRepository)
    private usersRepository: IUsersRepository,
    @inject(PermissionsRepository)
    private permissionsRepository: IPermissionsRepository,
    @inject(RolesRepository)
    private rolesRepository: IRolesRepository,
  ) {}

  async execute({
    permissions,
    roles,
    userId,
  }: IUserACLRequest): Promise<void> {
    const user = await this.usersRepository.findById(userId);
    if (!user) {
      throw new AppError("UserId does not exists!");
    }

    const permissionsExists =
      await this.permissionsRepository.findPermissionsByIds(permissions);
    if (permissionsExists.length === 0) {
      throw new AppError("don't exists permissions with  providers ids");
    }

    const rolesExists = await this.rolesRepository.findRolesByIds(roles);
    if (rolesExists.length === 0) {
      throw new AppError("don't exists permissions with providers ids");
    }

    const commonPermissionsIds = permissionsExists
      .filter((permission) => permissions.includes(permission.id))
      .map((permission) => permission.id);

    const commonRoleIds = rolesExists
      .filter((role) => roles.includes(role.id))
      .map((role) => role.id);

    await this.usersRepository.updateRolesAndPermissions({
      id: userId,
      permissions: commonPermissionsIds,
      roles: commonRoleIds,
    });
  }
}
