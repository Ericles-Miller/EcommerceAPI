import { AuthenticateUserController } from "@modules/accounts/useCases/authenticateUser/AuthenticateUserController";
import { AuthenticateOwnerController } from "@modules/owner/useCase/AuthenticatedOwner/AuthenticateOwnerController";
import { Router } from "express";

export const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();
authenticateRoutes.post("/user", authenticateUserController.handle);

const authenticateOwnerController = new AuthenticateOwnerController();
authenticateRoutes.post("/owner", authenticateOwnerController.handle);
