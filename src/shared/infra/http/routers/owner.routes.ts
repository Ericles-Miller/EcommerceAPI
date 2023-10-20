import { CreateOwnerController } from "@modules/owner/useCase/createOwner/CreateOwnerController";
import { Router } from "express";

export const ownerRouters = Router();

const createOwnerController = new CreateOwnerController();

ownerRouters.post("/", createOwnerController.handle);
