import { FastifyInstance } from "fastify";
import { TicketController } from "../controller/ticket.controller";

const controller = new TicketController();

export function ticketRoutes(app: FastifyInstance) {
    app.post("/", controller.create);
    app.get("/", controller.findAll)
    app.get("/{id}", controller.findOne)
    app.patch("/{id}", controller.update);
} 
