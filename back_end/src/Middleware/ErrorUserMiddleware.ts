import { NextFunction, Request, Response } from "express";
import { ApiError, BadRequestError } from "../Helpers/api-erros";
import { IUserCreate } from "../Interfaces/UserInterface";

const ErrorUserCreateMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  const inputs = ["email", "name", "phone", "password"];
  const keys = Object.keys(data);

  const output: string[] = [...inputs];
  inputs.forEach((elem) => {
    keys.forEach((element) => {
      if (elem == element) {
        let index = output.indexOf(elem);
        if (index !== -1) {
          output.splice(index, 1);
        }
      }
    });
  });

  if (output.length !== inputs.length && output.length !== 0) {
    throw new BadRequestError(
      "Missings keys: {" + output.toString() + "} Is required"
    );
  }

  if (data.name == "" || data.email == "") {
    throw new BadRequestError("Values dont not empty");
  }
  next();
};

export default ErrorUserCreateMiddleware;
