import {
  IPermissionsRepository,
  PermissionRequest,
} from "@modules/Permissions/infra/repositories/IPermissionsRepository";
import { PermissionsRepository } from "@modules/Permissions/infra/repositories/PermissionsRepository";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
export class CreatePermissionsUseCase {
  constructor(
    @inject(PermissionsRepository)
    private permissionsRepository: IPermissionsRepository,
  ) {}

  async execute({ name, description }: PermissionRequest): Promise<void> {
    const findPermission =
      await this.permissionsRepository.listPermissionByName(name);

    if (findPermission) {
      throw new AppError("Permission already exists!", 401);
    }

    await this.permissionsRepository.create({ name, description });
  }
}
