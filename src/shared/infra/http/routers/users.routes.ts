import uploadFileAvatar from "@jobs/uploadAvatar";
import { CreateAccessControlListController } from "@modules/AccessControlUser/useCase/CreateAccessControlListController";
import { CreateUserController } from "@modules/accounts/useCases/createUser/CreateUserController";
import { ListUsersController } from "@modules/accounts/useCases/listUser/ListUserController";
import { UpdateAvatarController } from "@modules/accounts/useCases/updateAvatar/UploadAvatarController";
import { Router } from "express";
import multer from "multer";

export const usersRouter = Router();

const uploadAvatar = multer(uploadFileAvatar.upload("./tmp"));

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const updateAvatarController = new UpdateAvatarController();
const createAccessControlListController =
  new CreateAccessControlListController();

usersRouter.post("/", createUserController.handle);
usersRouter.get("/", listUsersController.handle);
usersRouter.patch(
  "/uploadAvatar/:id",
  uploadAvatar.single("avatar"),
  updateAvatarController.handle,
);

usersRouter.patch(
  "/updateRolesAndPermissions/:userId",
  createAccessControlListController.handle,
);
