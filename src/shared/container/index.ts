import { AddressRepository } from "@modules/address/infra/repositories/AddressRepository";
import { IAddressRepository } from "@modules/address/infra/repositories/IRepositories/IAddressRepository";
import { CategoriesRepository } from "@modules/categories/infra/Repositories/CategoriesRepository";
import { ICategoriesRepository } from "@modules/categories/infra/Repositories/IRepositories/ICategoriesRepository";
import { IOwnerRepository } from "@modules/owner/infra/repositories/IRepositories/IOwnerRepository";
import { OwnerRepository } from "@modules/owner/infra/repositories/OwnersRepository";
import { IPermissionsRepository } from "@modules/Permissions/infra/repositories/IPermissionsRepository";
import { PermissionsRepository } from "@modules/Permissions/infra/repositories/PermissionsRepository";
import { IProductRepository } from "@modules/Product/Infra/Repositories/IRepositories/IProductRepository";
import { ProductRepository } from "@modules/Product/Infra/Repositories/ProductsRepository";
import { IRolesRepository } from "@modules/roles/infra/repositories/iRepositories/IRolesRepository";
import { RolesRepository } from "@modules/roles/infra/repositories/RolesRepository";
import { container } from "tsyringe";

import { IUsersRepository } from "../../modules/accounts/infra/Repositories/IRepositories/IUsersRepositories";
import { UsersRepository } from "../../modules/accounts/infra/Repositories/UsersRepository";

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

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository,
);

container.registerSingleton<IProductRepository>(
  "ProductRepository",
  ProductRepository,
);

container.registerSingleton<IRolesRepository>(
  "RolesRepository",
  RolesRepository,
);

container.registerSingleton<IPermissionsRepository>(
  "PermissionsRepository",
  PermissionsRepository,
);
