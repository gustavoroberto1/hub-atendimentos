import { FastifyInstance } from "fastify";
import { UserController } from "../controller/user.controller";

const controller = new UserController();

export function userRoutes(app: FastifyInstance) {
  app.post("/register", controller.register);
  app.post("/login", controller.login);
}
