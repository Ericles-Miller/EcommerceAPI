import { Router } from "express";
import { usersRouter } from "./users.routes";
import { addressRoutes } from "./address.routes";

export const router = Router();


router.use('/users', usersRouter);
router.use('/address', addressRoutes);