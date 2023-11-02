import { Address, PrismaClient, States } from "@prisma/client";

import { IRequestRepositoryAddressDTO } from "../DTOs/IRequestAddressRepositoryDTO";
import { IAddressRepository } from "./IRepositories/IAddressRepository";

export class AddressRepository implements IAddressRepository {
  private repository = new PrismaClient();

  async createAddress({
    cep,
    city,
    complement,
    neighborhood,
    number,
    stateId,
    street,
  }: IRequestRepositoryAddressDTO): Promise<void> {
    await this.repository.address.create({
      data: {
        city,
        cep,
        complement,
        neighborhood,
        number,
        street,
        stateId,
      },
    });
  }

  async listAddressById(id: string): Promise<Address | null> {
    const address = await this.repository.address.findUnique({
      where: {
        id,
      },
    });

    return address;
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
