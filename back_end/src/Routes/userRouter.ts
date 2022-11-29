import { Router } from "express";
import UserController from "../Controller/UserController";

const userRoutes = Router();

userRoutes.post("/create_user", UserController.create);
userRoutes.get("/list_user", UserController.list);
userRoutes.patch("/update_user/:user_id", UserController.update);
userRoutes.delete("/delete_user/:user_id", UserController.delete);

export default userRoutes;
