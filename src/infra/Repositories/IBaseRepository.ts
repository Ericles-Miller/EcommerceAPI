export interface IBaseRepository<T> {
  findById<T>(id: string): Promise<T>;
  create<T>(data: T): Promise<void>;
  listAll(): Promise<T[]>;
  update<T>(id: string, data: T): Promise<T>;
}
