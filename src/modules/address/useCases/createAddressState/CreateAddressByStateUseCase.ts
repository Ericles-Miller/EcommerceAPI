import { AddressRepository } from "@modules/address/infra/reposiotries/AddressRepository";
import { IAddressRepository } from "@modules/address/infra/reposiotries/IRepositories/IAddressRepository";
import { AppError } from "@shared/error/AppError";
import { inject, injectable } from "tsyringe";


@injectable()
export class CreateAddressByStateUseCase {
  constructor(
    @inject(AddressRepository)
    private addressRepository: IAddressRepository,
  ) {}

  async execute(name: string, country: string) : Promise<void> {

    await this.addressRepository.createStateAddress(name, country);
  }
}