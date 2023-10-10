import { Address } from "@prisma/client"


export interface IAddressRepository {
  createAddress() : Promise<void>
  listAddressByUser(userId: string) : Promise<Address>
}