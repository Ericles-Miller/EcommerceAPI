import { IRequestAddressDTO } from "@modules/address/infra/DTOs/IRequestAddressDTO";
import { AddressRepository } from "@modules/address/infra/repositories/AddressRepository";
import { IAddressRepository } from "@modules/address/infra/repositories/IRepositories/IAddressRepository";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

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
    street,
    stateName,
  }: IRequestAddressDTO): Promise<void> {
    const state = await this.addressRepository.listStateByName(stateName);

    if (!state) {
      throw new AppError("States does not exists!");
    }

    const stateId = state.id;

    await this.addressRepository.createAddress({
      cep,
      city,
      complement,
      neighborhood,
      number,
      stateId,
      street,
    });
  }
}
