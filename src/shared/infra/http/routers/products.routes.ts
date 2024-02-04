import { CreateProductController } from "@modules/Product/useCase/CreateProduct/CreateProductController";
import { Router } from "express";
import { ensureAuthenticatedOwner } from "middleware/ensureAuthenticateOwner";

export const productRouter = Router();

const createProductController = new CreateProductController();

productRouter.post(
  "/",
  ensureAuthenticatedOwner,
  createProductController.handle,
);
