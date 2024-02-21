import uploadFileAvatar from "@jobs/uploadAvatar";
import { CreateUserController } from "@modules/accounts/useCases/createUser/CreateUserController";
import { ListUsersController } from "@modules/accounts/useCases/listUser/ListUserController";
import { UpdateAvatarController } from "@modules/accounts/useCases/updateAvatar/UploadAvatarController";
import { UpdateAvatarController } from "@modules/accounts/useCases/updateAvatar/UploadAvatarController";
import { Router } from "express";
import multer from "multer";
import multer from "multer";

export const usersRouter = Router();

const uploadAvatar = multer(uploadFileAvatar.upload("./tmp"));

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const updateAvatarController = new UpdateAvatarController();

usersRouter.post("/", createUserController.handle);
usersRouter.get("/", listUsersController.handle);
usersRouter.patch(
  "/uploadAvatar/:id",
  uploadAvatar.single("avatar"),
  updateAvatarController.handle,
);
