import { NextFunction, Request, Response } from "express";
import prismaCliente from "../Database/prismaCliente";
import { NotFoundError } from "../Helpers/api-erros";

const ErrorUserIdIsValidMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { user_id } = req.params;

  const user = await prismaCliente.user.findUnique({ where: { id: user_id } });

  if (!user) {
    throw new NotFoundError("User not Found");
  }
  next();
};

export default ErrorUserIdIsValidMiddleware;
