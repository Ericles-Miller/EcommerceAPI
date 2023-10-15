import { AddressRepository } from "@modules/address/infra/repositories/AddressRepository";
import { IRequestAddressDTO } from "@modules/address/infra/repositories/DTOs/IRequestAddressDTO";
import { IAddressRepository } from "@modules/address/infra/repositories/IRepositories/IAddressRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class CreateAddressUseCase {
  constructor(
    @inject(AddressRepository)
    private addressRepository: IAddressRepository,
  ) {}

  async execute({
    cep,
    city,
    complement,
    neighborhood,
    number,
    statesId,
    street,
  }: IRequestAddressDTO): Promise<void> {
    await this.addressRepository.createAddress({
      cep,
      city,
      complement,
      neighborhood,
      number,
      statesId,
      street,
    });
  }
}
