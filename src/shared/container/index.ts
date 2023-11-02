import { AddressRepository } from "@modules/address/infra/repositories/AddressRepository";
import { IAddressRepository } from "@modules/address/infra/repositories/IRepositories/IAddressRepository";
import { IOwnerRepository } from "@modules/owner/infra/repositories/IRepositories/IOwnerRepository";
import { OwnerRepository } from "@modules/owner/infra/repositories/OwnersRepository";
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

container.registerSingleton<IOwnerRepository>(
  "OwnerRepository",
  OwnerRepository,
);
