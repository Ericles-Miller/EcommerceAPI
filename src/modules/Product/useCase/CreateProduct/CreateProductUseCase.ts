import { IRequestProductDTO } from "@modules/Product/Infra/Dtos/IRequestProductDTO";
import { IProductRepository } from "@modules/Product/Infra/Repositories/IRepositories/IProductRepository";
import { ProductRepository } from "@modules/Product/Infra/Repositories/ProductsRepository";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
export class CreateProductUseCase {
  constructor(
    @inject(ProductRepository)
    private productRepository: IProductRepository,
  ) {}

  async execute({
    avatar,
    categoryId,
    description,
    name,
    ownerId,
    price,
    stock,
  }: IRequestProductDTO): Promise<void> {
    const product = await this.productRepository.listProduct(name);
    if (product) {
      throw new AppError("product already exists!");
    }
    // a
    await this.productRepository.create({
      avatar,
      name,
      categoryId,
      description,
      ownerId,
      price,
      stock,
    });
  }
}
