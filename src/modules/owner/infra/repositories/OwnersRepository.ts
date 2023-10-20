import { Owners, PrismaClient } from "@prisma/client";

import { ICreatedOwnerDTO } from "../DTOs/ICreatedOwnerDTO";
import { IOwnerRepository } from "./IRepositories/IOwnerRepository";

export class OwnerRepository implements IOwnerRepository {
  private repository = new PrismaClient().owners;

  async create({
    addressId,
    cnpj,
    name,
    password,
    reputation,
  }: ICreatedOwnerDTO): Promise<void> {
    await this.repository.create({
      data: {
        cnpj,
        name,
        reputation,
        addressId,
        password,
      },
    });
  }

  list(): Promise<Owners[]> {
    throw new Error("Method not implemented.");
  }

  async listOwnerByCnpj(cnpj: number): Promise<Owners | null> {
    const owner = await this.repository.findFirst({
      where: {
        cnpj,
      },
    });

    return owner;
  }
}
