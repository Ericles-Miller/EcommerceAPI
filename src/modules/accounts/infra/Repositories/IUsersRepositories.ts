import { IRequestDTO } from "../DTOs/IRequestDTO";


export interface IUsersRepository {
  create(data:IRequestDTO): Promise<void>
}