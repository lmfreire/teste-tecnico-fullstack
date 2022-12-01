import "express-async-errors";
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

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(userRoutes);
    this.server.use(contactRoutes);
    this.server.use(errorMiddleware);
  }
}

export default new App().server;
