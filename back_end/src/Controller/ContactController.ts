import { Request, Response } from "express";
import { IContactCreate } from "../Interfaces/UserInterface";
import ContactService from "../Service/ContactService";

class ContactController {
  async create(req: Request, res: Response) {
    const { email, name, phone }: IContactCreate = req.body;
    const { user_id } = req.params;

    const contact = await ContactService.create(
      { email, name, phone },
      user_id
    );

    return res.status(201).json(contact);
  }

  async list(req: Request, res: Response) {
    const list = await ContactService.list();

    return res.json(list);
  }

  async update(req: Request, res: Response) {
    const data = req.body;
    const { contact_id } = req.params;
    const contactUpdated = await ContactService.update(data, contact_id);

    return res.json(contactUpdated);
  }

  async delete(req: Request, res: Response) {
    const { contact_id } = req.params;

    await ContactService.delete(contact_id);

    return res.status(204).send();
  }

  async addPhone(req: Request, res: Response) {
    const { phone } = req.body;
    const { contact_id } = req.params;

    const contactPhone = await ContactService.addPhone(phone, contact_id);

    return res.json(contactPhone);
  }

  async deletePhone(req: Request, res: Response) {
    const { phone_id } = req.params;

    await ContactService.deletePhone(phone_id);

    return res.status(204).send();
  }

  async addEmail(req: Request, res: Response) {
    const { email } = req.body;
    const { contact_id } = req.params;

    const contactEmail = await ContactService.addEmail(email, contact_id);

    return res.json(contactEmail);
  }

  async deleteEmail(req: Request, res: Response) {
    const { email_id } = req.params;

    await ContactService.deleteEmail(email_id);

    return res.status(204).send();
  }
}

export default new ContactController();
