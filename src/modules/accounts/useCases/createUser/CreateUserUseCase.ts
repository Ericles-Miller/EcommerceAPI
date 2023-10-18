import { AddressRepository } from "@modules/address/infra/repositories/AddressRepository";
import { IAddressRepository } from "@modules/address/infra/repositories/IRepositories/IAddressRepository";
import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/error/AppError";

import { IRequestCreateUserDTO } from "../../infra/DTOs/IRequestDTO";
import { IUsersRepository } from "../../infra/Repositories/IUsersRepositories";
import { UsersRepository } from "../../infra/Repositories/Repositories/UsersRepository";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject(UsersRepository)
    private usersRepository: IUsersRepository,

    @inject(AddressRepository)
    private addressRepository: IAddressRepository,
  ) {}

  async execute({
    email,
    name,
    password,
    addressId,
  }: IRequestCreateUserDTO): Promise<void> {
    const user = await this.usersRepository.listUserByEmail(email);
    if (user) {
      throw new AppError("Email user already exists!");
    }

    const address = await this.addressRepository.listAddressById(addressId);
    if (!address) {
      throw new AppError("addressId does not exists");
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
      addressId,
    });
  }
}
