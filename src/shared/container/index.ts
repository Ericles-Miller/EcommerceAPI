import { container } from "tsyringe";
import { IUsersRepository } from "../../modules/accounts/infra/Repositories/IUsersRepositories";
import { UsersRepository } from "../../modules/accounts/infra/Repositories/Repositories/UsersRepository";
import { IAddressRepository } from "@modules/address/infra/reposiotries/IRepositories/IAddressRepository";
import { AddressRepository } from "@modules/address/infra/reposiotries/AddressRepository";



container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<IAddressRepository>(
  'AddressRepository',
  AddressRepository
);