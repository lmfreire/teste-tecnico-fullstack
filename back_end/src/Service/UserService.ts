import prismaCliente from "../Database/prismaCliente";
import { IUserCreate } from "../Interfaces/UserInterface";

class UserService {
  async create({ email, name, phone }: IUserCreate) {
    const user = await prismaCliente.user.create({
      data: {
        email,
        name,
        phone,
      },
    });

    return user;
  }

  async list() {
    return await prismaCliente.user.findMany({
      include: { UserContact: true },
    });
  }

  async update(dataBody: object, id: string) {
    const userUpdated = await prismaCliente.user.update({
      where: {
        id: id,
      },
      data: dataBody,
    });

    return userUpdated;
  }

  async delete(id: string) {
    await prismaCliente.user.delete({
      where: {
        id: id,
      },
    });

    return;
  }
}

export default new UserService();
