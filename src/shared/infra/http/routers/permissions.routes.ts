import { CreatePermissionController } from "@modules/Permissions/UseCase/CreatePermissions/CreatePermissionController";
import { Router } from "express";

export const permissionsRouters = Router();
const createPermissionController = new CreatePermissionController();

permissionsRouters.post("/", createPermissionController.handle); // adcionar autenticacao admin
