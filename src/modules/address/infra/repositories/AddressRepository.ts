import { Address, PrismaClient, States } from "@prisma/client";

import { IRequestAddressDTO } from "./DTOs/IRequestAddressDTO";
import { IAddressRepository } from "./IRepositories/IAddressRepository";

export class AddressRepository implements IAddressRepository {
  private repository = new PrismaClient();

  async createStateAddress(name: string, country: string): Promise<void> {
    await this.repository.states.create({
      data: {
        name,
        country,
      },
    });
  }

  async createAddress({
    cep,
    city,
    complement,
    neighborhood,
    number,
    statesId,
    street,
  }: IRequestAddressDTO): Promise<void> {
    await this.repository.address.create({
      data: {
        city,
        cep,
        complement,
        neighborhood,
        number,
        street,
        statesId,
      },
    });
  }

  listAddressByUser(userId: string): Promise<Address> {
    throw new Error("Method not implemented.");
  }

  async listStateByName(name: string): Promise<States | null> {
    const state = await this.repository.states.findFirst({
      where: {
        name,
      },
    });

    return state;
  }
}
