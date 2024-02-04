import { Address, State } from "@prisma/client";

import { IRequestRepositoryAddressDTO } from "../../DTOs/IRequestAddressRepositoryDTO";

export interface IAddressRepository {
  createAddress({
    cep,
    city,
    complement,
    neighborhood,
    number,
    stateId,
    street,
  }: IRequestRepositoryAddressDTO): Promise<void>;
  listAddressById(addressId: string): Promise<Address | null>;
  listStateByName(name: string): Promise<State | null>;
}
