import { Owners } from "@prisma/client";

import { ICreatedOwnerDTO } from "../../DTOs/ICreatedOwnerDTO";

export interface IOwnerRepository {
  create(data: ICreatedOwnerDTO): Promise<void>;
  list(): Promise<Owners[]>;
  listOwnerByCnpj(cnpj: number): Promise<Owners | null>;
}
