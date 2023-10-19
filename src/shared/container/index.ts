import { AddressRepository } from "@modules/address/infra/repositories/AddressRepository";
import { IAddressRepository } from "@modules/address/infra/repositories/IRepositories/IAddressRepository";
import { container } from "tsyringe";

import { IUsersRepository } from "../../modules/accounts/infra/Repositories/IUsersRepositories";
import { UsersRepository } from "../../modules/accounts/infra/Repositories/Repositories/UsersRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository,
);

container.registerSingleton<IAddressRepository>(
  "AddressRepository",
  AddressRepository,
);
