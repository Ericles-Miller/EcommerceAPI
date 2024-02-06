import jobsAvatar from "@jobs/uploadAvatar";
import { CreateUserController } from "@modules/accounts/useCases/createUser/CreateUserController";
import { ListUsersController } from "@modules/accounts/useCases/listUser/ListUserController";
import { UpdateAvatarController } from "@modules/accounts/useCases/updateAvatar/UploadAvatarController";
import { Router } from "express";
import multer from "multer";

export const usersRouter = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const updateAvatarController = new UpdateAvatarController();
const uploadFileAvatar = multer(jobsAvatar.upload());

usersRouter.post("/", createUserController.handle);
usersRouter.get("/", listUsersController.handle);
usersRouter.patch(
  "/uploadAvatar/:id",
  uploadFileAvatar.single("img"),
  updateAvatarController.handle,
);
