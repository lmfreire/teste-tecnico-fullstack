import prismaCliente from "../Database/prismaCliente";
import { IContactCreate } from "../Interfaces/UserInterface";

class ContactService {
  async create({ email, name, phone }: IContactCreate, id: string) {
    const contact = await prismaCliente.userContact.create({
      data: {
        name,

        user_id: id,
        Phone: {
          create: {
            phone,
          },
        },
        Email: {
          create: {
            email,
          },
        },
      },
      include: {
        Email: true,
        Phone: true,
      },
    });

    return contact;
  }

  async list() {
    return await prismaCliente.userContact.findMany({
      include: { Email: true, Phone: true, user: true },
    });
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
    await prismaCliente.emailContact.deleteMany({
      where: { user_contact_id: id },
    });

    await prismaCliente.phoneContact.deleteMany({
      where: { user_contact_id: id },
    });

    await prismaCliente.userContact.delete({ where: { id } });
    return;
  }

  async addPhone(phone: string, id: string) {
    const phoneUser = await prismaCliente.phoneContact.create({
      data: {
        phone,
        user_contact_id: id,
      },
      include: {
        user_contact: true,
      },
    });

    return phoneUser;
  }

  async deletePhone(id: string) {
    await prismaCliente.phoneContact.delete({
      where: { id },
    });
    return;
  }

  async addEmail(email: string, id: string) {
    const emailUser = await prismaCliente.emailContact.create({
      data: {
        email,
        user_contact_id: id,
      },
      include: {
        user_contact: true,
      },
    });

    return emailUser;
  }

  async deleteEmail(id: string) {
    await prismaCliente.emailContact.delete({
      where: { id },
    });
    return;
  }
}

export default new ContactService();
