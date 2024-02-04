import { Category } from "@prisma/client";

import { IResponseCategoryDTO } from "../../DTOs/IResponseCategoryDTO";

export interface ICategoriesRepository {
  create(data: IResponseCategoryDTO): Promise<void>;
  findCategoryByName(name: string): Promise<Category | null>;
}
