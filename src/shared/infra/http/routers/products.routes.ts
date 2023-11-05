import { CreateProductController } from "@modules/Product/useCase/CreateProduct/CreateProductController";
import { Router } from "express";

export const productRouter = Router();

const createProductController = new CreateProductController();

productRouter.post("/", createProductController.handle);
