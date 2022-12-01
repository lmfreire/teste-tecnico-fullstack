import { NextFunction, Request, Response } from "express";
import { BadRequestError } from "../Helpers/api-erros";

const ErrorUserContactMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  const inputs = ["email", "name", "phone"];
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
  next();
};

export default ErrorUserContactMiddleware;
