import { Products } from "@prisma/client";

import { IRequestProductDTO } from "../../Dtos/IRequestProductDTO";

export interface IProductRepository {
  create({
    categoryId,
    description,
    name,
    ownerId,
    price,
    stock,
  }: IRequestProductDTO): Promise<void>;
  listProduct(name: string): Promise<Products | null>;
}
