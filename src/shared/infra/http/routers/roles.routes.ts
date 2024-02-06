import { CreateRolesController } from "@modules/roles/UseCases/CreateRoles/CreateRolesController";
import { Router } from "express";

export const rolesRouters = Router();
const createRolesController = new CreateRolesController();

rolesRouters.post("/", createRolesController.handle); // adcionar autenticacao admin
