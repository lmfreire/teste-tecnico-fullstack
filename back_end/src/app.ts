import "express-async-errors";
import { NextFunction, Request, Response } from "express";
import cors from "cors";
import express from "express";
import contactRoutes from "./Routes/contactRouter";
import userRoutes from "./Routes/userRouter";
import errorMiddleware from "./Middleware/errorMiddleware";

class App {
  server: any;
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  enableCors() {
    const options: cors.CorsOptions = {
      methods: "GET,POST,PATCH,DELETE",
      origin: "*",
    };

    this.server.use(cors(options));
  }

  middlewares() {
    this.enableCors();
    this.server.use(express.json());
  }

  routes() {
    this.server.use(userRoutes);
    this.server.use(contactRoutes);
    this.server.use(errorMiddleware);
  }
}

export default new App().server;
