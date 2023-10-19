import { Users } from "@prisma/client";

import { IRequestCreateUserDTO } from "../DTOs/IRequestDTO";

export interface IUsersRepository {
  create(data: IRequestCreateUserDTO): Promise<void>;
  findById(id: string): Promise<Users | null>;
  listUserByEmail(email: string): Promise<Users | null>;
  list(): Promise<Users[]>;
}
