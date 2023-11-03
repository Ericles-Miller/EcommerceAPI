import { CreateCategoryController } from "@modules/categories/useCase/createCategory/CreateCategoryController";
import { Router } from "express";

export const categoryRoutes = Router();

const createCategoryController = new CreateCategoryController();

categoryRoutes.post("/", createCategoryController.handle);
