import { NextFunction, Request, Response } from "express";
import prismaCliente from "../Database/prismaCliente";
import { NotFoundError } from "../Helpers/api-erros";

const ErrorUserContactIdIsValidMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { contact_id } = req.params;

  const user = await prismaCliente.userContact.findUnique({
    where: { id: contact_id },
  });

  if (!user) {
    throw new NotFoundError("User Contact not Found");
  }
  next();
};

export default ErrorUserContactIdIsValidMiddleware;
