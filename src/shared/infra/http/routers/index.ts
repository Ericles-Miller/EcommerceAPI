import { Router } from "express";

import { addressRoutes } from "./address.routes";
import { authenticateRoutes } from "./authenticate.routes";
import { categoryRoutes } from "./category.routes";
import { ownerRouters } from "./owner.routes";
import { productRouter } from "./products.routes";
import { usersRouter } from "./users.routes";

export const router = Router();

router.use("/sessions", authenticateRoutes);

router.use("/users", usersRouter);
router.use("/address", addressRoutes);
router.use("/owners", ownerRouters);
router.use("/category", categoryRoutes);
router.use("/product", productRouter);
