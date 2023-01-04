import prismaCliente from "../Database/prismaCliente";
import { IUserCreate } from "../Interfaces/UserInterface";
import { hash, compareSync } from "bcryptjs";
import jwt from "jsonwebtoken";
import { UnauthorizedError } from "../Helpers/api-erros";

class UserService {
  async create({ email, name, phone, password }: IUserCreate) {
    password = await hash(password, 10);
    const user = await prismaCliente.user.create({
      data: {
        name,
        password,
        Email: {
          create: {
            email,
          },
        },
        Phone: {
          create: {
            phone,
          },
        },
      },
      include: {
        Email: true,
        Phone: true,
      }
    });
    
    return user;
  }

  async login(email: string, password: string) {
    const user = await prismaCliente.user.findFirst({
      where: { Email: { some: { email } } },
      include: {
        Email: true,
      },
    });

    if (!user) {
      throw new UnauthorizedError("Invalid credentials");
    }

    if (!compareSync(password, user!.password)) {
      throw new UnauthorizedError("Invalid credentials");
    }

    const token = jwt.sign(
      {
        id: user!.id,
        email: user!.Email[0].email,
      },
      "Chave_SECRETA",
      {
        subject: user!.id,
        expiresIn: "1d",
      }
    );

    return token;
  }

  async list() {
    return await prismaCliente.user.findMany({
      include: {
        UserContact: { include: { Email: true, Phone: true } },
        Email: true,
        Phone: true,
      },
    });
  }

  async listById(id: string) {
    return await prismaCliente.user.findUnique({
      where: { id },
      include: {
        UserContact: { include: { Email: true, Phone: true } },
        Email: true,
        Phone: true,
      },
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
    await prismaCliente.userContact.deleteMany({
      where: { user_id: id },
    });

    await prismaCliente.phoneUser.deleteMany({
      where: {
        user_id: id,
      },
    });

    await prismaCliente.emailUser.deleteMany({
      where: {
        user_id: id,
      },
    });

    await prismaCliente.user.delete({
      where: {
        id: id,
      },
    });

    return;
  }

  async addPhone(phone: string, id: string) {
    const phoneUser = await prismaCliente.phoneUser.create({
      data: {
        phone,
        user_id: id,
      },
      include: {
        user: true,
      },
    });

    return phoneUser;
  }

  async deletePhone(id: string) {
    await prismaCliente.phoneUser.delete({
      where: { id },
    });
    return;
  }

  async addEmail(email: string, id: string) {
    const emailUser = await prismaCliente.emailUser.create({
      data: {
        email,
        user_id: id,
      },
      include: {
        user: true,
      },
    });

    return emailUser;
  }

  async deleteEmail(id: string) {
    await prismaCliente.emailUser.delete({
      where: { id },
    });
    return;
  }
}

export default new UserService();
