import express from "express";
import contactRoutes from "./Routes/contactRouter";
import userRoutes from "./Routes/userRouter";


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
  }
}

export default new App().server;
