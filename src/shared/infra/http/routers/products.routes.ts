import { CreateProductController } from "@modules/Product/useCase/CreateProduct/CreateProductController";
import { Router } from "express";
import { ensureAuthenticated } from "middleware/ensureAuthenticate";

export const productRouter = Router();

const createProductController = new CreateProductController();

productRouter.post("/", ensureAuthenticated, createProductController.handle);
