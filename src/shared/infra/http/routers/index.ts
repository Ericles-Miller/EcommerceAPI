import { Router } from "express";

import { addressRoutes } from "./address.routes";
import { authenticateRoutes } from "./authenticate.routes";
import { usersRouter } from "./users.routes";

export const router = Router();

router.use(authenticateRoutes);

router.use("/users", usersRouter);
router.use("/address", addressRoutes);
