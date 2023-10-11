import { CreateAddressController } from "@modules/address/useCases/CreateAddress/CreateAddressController";
import { CreateAddressByStateController } from "@modules/address/useCases/createAddressState/CreateAddressByStateController";
import { CreateAddressByStateUseCase } from "@modules/address/useCases/createAddressState/CreateAddressByStateUseCase";
import { Router } from "express";


export const addressRoutes = Router();

const createAddressController = new CreateAddressController();
const createAddressByStateController = new CreateAddressByStateController();

addressRoutes.post('/createAddress', createAddressController.handle)
addressRoutes.post('/', createAddressByStateController.handle);