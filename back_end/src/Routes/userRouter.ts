import { Router } from "express";
import UserController from "../Controller/UserController";
import ErrorUserIdIsValidMiddleware from "../Middleware/ErrorUserIdIsValidMiddleware";
import ErrorUserLoginMiddleware from "../Middleware/ErrorUserLoginMiddleware";
import ErrorUserCreateMiddleware from "../Middleware/ErrorUserMiddleware";
import IsOwnerMiddleware from "../Middleware/IsOwnerMiddleware";

const userRoutes = Router();

userRoutes.post("/login", ErrorUserLoginMiddleware, UserController.login);
userRoutes.post(
  "/create_user",
  ErrorUserCreateMiddleware,
  UserController.create
);
userRoutes.post(
  "/create_user_phone/:user_id",
  ErrorUserIdIsValidMiddleware,
  UserController.addPhone
);
userRoutes.post(
  "/create_user_email/:user_id",
  ErrorUserIdIsValidMiddleware,
  UserController.addEmail
);
userRoutes.get("/list_user", UserController.list);
userRoutes.get("/list_user_id/", IsOwnerMiddleware, UserController.listById);
userRoutes.patch(
  "/update_user/:user_id",
  ErrorUserIdIsValidMiddleware,
  UserController.update
);
userRoutes.delete(
  "/delete_user/:user_id",
  ErrorUserIdIsValidMiddleware,
  UserController.delete
);
userRoutes.delete("/delete_user_phone/:phone_id", UserController.deletePhone);
userRoutes.delete("/delete_user_email/:email_id", UserController.deleteEmail);

export default userRoutes;
