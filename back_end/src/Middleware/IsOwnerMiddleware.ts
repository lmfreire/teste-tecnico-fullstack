import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { BadRequestError, UnauthorizedError } from "../helpers/api-erros";

const IsOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;
  // const { user_id } = req.params;

  if (!token) {
    throw new BadRequestError("Token Required");
  }

  token = token.split(" ")[1];

  let user: object = {};
  jwt.verify(token, "Chave_SECRETA", (error: any, decoded: any) => {
    if (error) {
      throw new UnauthorizedError("Invalid token");
    }

    req.user = {
      id: decoded.id,
      email: decoded.email,
    };

    // if (decoded.id !== user_id) {
    //   throw new UnauthorizedError("User token and id is not macth");
    // }
  });

  next();
};

export default IsOwnerMiddleware;
