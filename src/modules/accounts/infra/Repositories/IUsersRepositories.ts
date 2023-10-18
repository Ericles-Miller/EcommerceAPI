import { Users } from "@prisma/client";

import { IRequestCreateUserDTO } from "../DTOs/IRequestDTO";

export interface IUsersRepository {
  create(data: IRequestCreateUserDTO): Promise<void>;
  listUserByEmail(email: string): Promise<Users | null>;
  findById(id: string): Promise<Users | null>;
}
