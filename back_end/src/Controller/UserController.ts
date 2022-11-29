import { Request, Response } from "express";
import { IUserCreate } from "../Interfaces/UserInterface";
import UserService from "../Service/UserService";

class UserController {
  async create(req: Request, res: Response) {
    const { email, name, phone }: IUserCreate = req.body;

    const user = await UserService.create({ email, name, phone });

    return res.status(201).json(user);
  }

  async list(req: Request, res: Response) {
    const list = await UserService.list();
    return res.json(list);
  }

  async update(req: Request, res: Response) {
    const data = req.body;
    const { user_id } = req.params;

    const userUpdated = await UserService.update(data, user_id);

    return res.json(userUpdated);
  }

  async delete(req: Request, res: Response) {
    const { user_id } = req.params;

    await UserService.delete(user_id);

    return res.status(204).send();
  }
}

export default new UserController();
