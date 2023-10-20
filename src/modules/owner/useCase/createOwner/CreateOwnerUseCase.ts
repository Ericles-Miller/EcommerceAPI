import { AddressRepository } from "@modules/address/infra/repositories/AddressRepository";
import { IAddressRepository } from "@modules/address/infra/repositories/IRepositories/IAddressRepository";
import { ICreatedOwnerDTO } from "@modules/owner/infra/DTOs/ICreatedOwnerDTO";
import { IOwnerRepository } from "@modules/owner/infra/repositories/IRepositories/IOwnerRepository";
import { OwnerRepository } from "@modules/owner/infra/repositories/OwnersRepository";
import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";


@injectable()
export class CreateOwnerUseCase {
  constructor(
    @inject(OwnerRepository)
    private ownerRepository: IOwnerRepository,

    @inject(AddressRepository)
    private addressRepository: IAddressRepository,
  ) {}

  async execute({
    addressId,
    cnpj,
    name,
    password,
    reputation,
  }: ICreatedOwnerDTO): Promise<void> {
    const owner = await this.ownerRepository.listOwnerByCnpj(cnpj);
    if (owner) {
      throw new AppError("Email user already exists!");
    }

    const address = await this.addressRepository.listAddressById(addressId);
    if (!address) {
      throw new AppError("addressId does not exists");
    }

    const passwordHash = await hash(password, 8);

    await this.ownerRepository.create({
      addressId,
      cnpj,
      name,
      password: passwordHash,
      reputation,
    });
  }
}
