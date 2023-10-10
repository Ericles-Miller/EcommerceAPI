import e, { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";



export class CreateUserController {
  async handle(request:Request, response: Response) : Promise<Response> {
    const { name, email, password, avatar} = request.body;
    console.log(name, email, password,avatar);
    
    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({name, email, password, avatar});

    return response.status(201).send();
  }
}