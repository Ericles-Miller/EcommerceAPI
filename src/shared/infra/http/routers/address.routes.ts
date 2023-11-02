import { CreateAddressController } from "@modules/address/useCases/CreateAddress/CreateAddressController";
import { Router } from "express";

export const addressRoutes = Router();

const createAddressController = new CreateAddressController();

addressRoutes.post("/createAddress", createAddressController.handle);
