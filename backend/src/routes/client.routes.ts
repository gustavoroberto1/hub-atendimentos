import { FastifyInstance } from "fastify";
import { UserController } from "../controller/user.controller";

const controller = new UserController();

export function clientRoutes(app: FastifyInstance) {
  app.get("/", controller.register);
  app.post("/", controller.register);
  app.get("/{id}", controller.register);
  app.patch("/{id}", controller.register);
  app.delete("/{id}", controller.register);
} 
