import { User } from "@prisma/client";

import { IRequestCreateUserDTO } from "../DTOs/IRequestDTO";

export interface IUsersRepository {
  create(data: IRequestCreateUserDTO): Promise<void>;
  findById(id: string): Promise<User | null>;
  listUserByEmail(email: string): Promise<User | null>;
  list(): Promise<User[]>;
}
