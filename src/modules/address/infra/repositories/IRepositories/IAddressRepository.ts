import { Address, States } from "@prisma/client";

import { IRequestAddressDTO } from "../DTOs/IRequestAddressDTO";

export interface IAddressRepository {
  createAddress({
    cep,
    city,
    complement,
    neighborhood,
    number,
    statesId,
    street,
  }: IRequestAddressDTO): Promise<void>;
  createStateAddress(name: string, country: string): Promise<void>;
  listAddressById(addressId: string): Promise<Address | null>;
  listStateByName(name: string): Promise<States | null>;
}
