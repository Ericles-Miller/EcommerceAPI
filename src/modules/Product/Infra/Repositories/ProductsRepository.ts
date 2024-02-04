import { PrismaClient, Product } from "@prisma/client";

import { IRequestProductDTO } from "../Dtos/IRequestProductDTO";
import { IProductRepository } from "./IRepositories/IProductRepository";

export class ProductRepository implements IProductRepository {
  private repository = new PrismaClient().product;

  async create({
    categoryId,
    description,
    name,
    ownerId,
    price,
    stock,
    avatar,
  }: IRequestProductDTO): Promise<void> {
    await this.repository.create({
      data: {
        categoryId,
        description,
        name,
        price,
        stock,
        ownerId,
        avatar,
      },
    });
  }

  async listProduct(name: string): Promise<Product | null> {
    const product = await this.repository.findFirst({
      where: {
        name,
      },
    });

    return product;
  }
}
