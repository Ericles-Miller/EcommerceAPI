import { Owner } from "@prisma/client";

import { ICreatedOwnerDTO } from "../../DTOs/ICreatedOwnerDTO";

export interface IOwnerRepository {
  create(data: ICreatedOwnerDTO): Promise<void>;
  list(): Promise<Owner[]>;
  listOwnerByCnpj(cnpj: number): Promise<Owner | null>;
  listOwnerByEmail(email: string): Promise<Owner | null>;
}
