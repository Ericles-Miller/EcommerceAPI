import { Owner, PrismaClient } from "@prisma/client";

import { ICreatedOwnerDTO } from "../DTOs/ICreatedOwnerDTO";
import { IOwnerRepository } from "./IRepositories/IOwnerRepository";

export class OwnerRepository implements IOwnerRepository {
  private repository = new PrismaClient().owner;

  async create({
    addressId,
    cnpj,
    name,
    password,
    reputation,
    email,
  }: ICreatedOwnerDTO): Promise<void> {
    await this.repository.create({
      data: {
        cnpj,
        name,
        reputation,
        addressId,
        password,
        email,
      },
    });
  }

  list(): Promise<Owner[]> {
    throw new Error("Method not implemented.");
  }

  async listOwnerByCnpj(cnpj: number): Promise<Owner | null> {
    const owner = await this.repository.findFirst({
      where: {
        cnpj,
      },
    });

    return owner;
  }

  async listOwnerByEmail(email: string): Promise<Owner | null> {
    const owner = await this.repository.findUnique({
      where: {
        email,
      },
    });
    return owner;
  }
}
