import { Category, PrismaClient } from "@prisma/client";

import { IResponseCategoryDTO } from "../DTOs/IResponseCategoryDTO";
import { ICategoriesRepository } from "./IRepositories/ICategoriesRepository";

export class CategoriesRepository implements ICategoriesRepository {
  async findCategoryByName(name: string): Promise<Category | null> {
    const category = await this.repository.findFirst({
      where: {
        name,
      },
    });
    return category;
  }
  private repository = new PrismaClient().category;

  async create({ name, description }: IResponseCategoryDTO): Promise<void> {
    await this.repository.create({
      data: {
        name,
        description,
      },
    });
  }
}
