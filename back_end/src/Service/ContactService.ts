import prismaCliente from "../Database/prismaCliente";
import { IContactCreate } from "../Interfaces/UserInterface";

class ContactService {
  async create({ email, name, phone }: IContactCreate, id: string) {
    const contact = await prismaCliente.userContact.create({
      data: {
        email,
        name,
        phone,
        user_id: id,
      },
    });

    return contact;
  }

  async list() {
    return await prismaCliente.userContact.findMany({});
  }

  async update(data: object, id: string) {
    const contactUpdated = await prismaCliente.userContact.update({
      where: {
        id,
      },
      data: data,
    });

    return contactUpdated;
  }

  async delete(id: string) {
    await prismaCliente.userContact.delete({ where: { id } });
    return;
  }
}

export default new ContactService();
