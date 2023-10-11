import { container } from "tsyringe";
import { CreateAddressUseCase } from "./CreateAddressUseCase";
import { Request, Response } from "express";


export class CreateAddressController {
  async handle(request: Request, response: Response) : Promise<Response> {
    const {cep,city,complement,neighborhood,number,statesId,street} = request.body;

    const createAddressUseCase = container.resolve(CreateAddressUseCase);

    await createAddressUseCase.execute({cep,city,complement,neighborhood,number,statesId,street});

    return response.status(201).send();
  }
}