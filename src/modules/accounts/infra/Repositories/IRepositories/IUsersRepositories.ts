import { User } from "@prisma/client";

import { IRequestCreateUserDTO } from "../../DTOs/IRequestDTO";
import {
  IUpdateRolesAndPermissions,
  IUpdateUserDTO,
} from "../../DTOs/IUpdateUserDTO";

export interface IUsersRepository {
  create(data: IRequestCreateUserDTO): Promise<void>;
  findById(id: string): Promise<User | null>;
  listUserByEmail(email: string): Promise<User | null>;
  list(): Promise<User[]>;
  updateUser(data: IUpdateUserDTO): Promise<void>;
  disableEnableUser(id: string, option: boolean): Promise<void>;
  updateAvatar(avatar: string, id: string): Promise<void>;
  updateRolesAndPermissions({
    id,
    permissions,
    roles,
  }: IUpdateRolesAndPermissions): Promise<void>;
}
