import { IResponseCategoryDTO } from "@modules/categories/infra/DTOs/IResponseCategoryDTO";
import { CategoriesRepository } from "@modules/categories/infra/Repositories/CategoriesRepository";
import { ICategoriesRepository } from "@modules/categories/infra/Repositories/IRepositories/ICategoriesRepository";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
export class CreateCategoryUseCase {
  constructor(
    @inject(CategoriesRepository)
    private categoryRepository: ICategoriesRepository,
  ) {}
  async execute({ name, description }: IResponseCategoryDTO): Promise<void> {
    const category = await this.categoryRepository.findCategoryByName(name);

    if (category) {
      throw new AppError("Category already exits!");
    }

    await this.categoryRepository.create({ name, description });
  }
}
