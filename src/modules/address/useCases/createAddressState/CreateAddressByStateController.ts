import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateAddressByStateUseCase } from "./CreateAddressByStateUseCase";


export class CreateAddressByStateController {
  async handle(request: Request, response: Response) : Promise<Response> {
    const { name, country} = request.body;

    const createAddressByStateUseCase = container.resolve(CreateAddressByStateUseCase);

    await createAddressByStateUseCase.execute(name, country);

    return response.status(201).send();
  }
}