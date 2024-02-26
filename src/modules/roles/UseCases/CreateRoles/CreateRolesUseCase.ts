import { IRolesRepository } from "@modules/roles/infra/repositories/iRepositories/IRolesRepository";
import { RolesRepository } from "@modules/roles/infra/repositories/RolesRepository";
import { RoleRequest } from "@modules/roles/infra/types/RoleRequest";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
export class CreateRolesUseCase {
  constructor(
    @inject(RolesRepository)
    private rolesRepository: IRolesRepository,
  ) {}

  async execute({ name, description }: RoleRequest): Promise<void> {
    const roleAlreadyExists = await this.rolesRepository.listRoleByName(name);
    if (roleAlreadyExists) {
      throw new AppError("Role Already Exists!");
    }

    await this.rolesRepository.create({ name, description });
  }
}
