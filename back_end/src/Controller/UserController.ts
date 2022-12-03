import { Request, Response } from "express";
import { IUserCreate } from "../Interfaces/UserInterface";
import UserService from "../Service/UserService";

class UserController {
  async create(req: Request, res: Response) {
    const { email, name, phone, password }: IUserCreate = req.body;

    const user = await UserService.create({ email, name, phone, password });

    return res.status(201).json(user);
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const token = await UserService.login(email, password);

    return res.json({ token });
  }

  async list(req: Request, res: Response) {
    const list = await UserService.list();
    return res.json(list);
  }

  async listById(req: Request, res: Response) {
    const user_id = req.user.id;

    const user = await UserService.listById(user_id);
    return res.json(user);
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

  async addPhone(req: Request, res: Response) {
    const { phone } = req.body;
    const { user_id } = req.params;

    const userPhone = await UserService.addPhone(phone, user_id);

    return res.json(userPhone);
  }

  async deletePhone(req: Request, res: Response) {
    const { phone_id } = req.params;

    await UserService.deletePhone(phone_id);

    return res.status(204).send();
  }

  async addEmail(req: Request, res: Response) {
    const { email } = req.body;
    const { user_id } = req.params;

    const userEmail = await UserService.addEmail(email, user_id);

    return res.json(userEmail);
  }

  async deleteEmail(req: Request, res: Response) {
    const { email_id } = req.params;

    await UserService.deleteEmail(email_id);

    return res.status(204).send();
  }
}

export default new UserController();
