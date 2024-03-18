import { Categories } from "infra/Entities/Categories";
import { Users } from "infra/Entities/Users";
import { injectable } from "tsyringe";

import { IBaseRepository } from "./IBaseRepository";

@injectable()
export class BaseRepository<T extends Users | Categories>
  implements IBaseRepository<T>
{
  protected readonly drizzle: Drizzle;
  protected readonly tableName: string; // Nome da tabela no banco de dados

  constructor(drizzle: Drizzle, tableName: string) {
    this.drizzle = drizzle;
    this.tableName = tableName;
  }

  async findById<T>(id: string): Promise<T> {
    const context = await this.repository.findUnique({
      where: {
        id,
      },
    });

    return context;
  }

  async create<T>(data: T): Promise<void> {
    await this.repository.create({
      data,
    });
  }

  async listAll(): Promise<T[]> {
    const context = await this.repository.findMany();
    return context;
  }

  async update<T>(id: string, data: T): Promise<T> {
    const context = await this.repository.update({
      where: {
        id,
      },
      data,
    });

    return context;
  }
}
