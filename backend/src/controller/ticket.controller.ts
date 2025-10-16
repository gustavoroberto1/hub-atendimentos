import { FastifyReply, FastifyRequest } from "fastify";
import { ticketService } from "../service/ticket.service";

export class TicketController {
    constructor(private readonly service = ticketService) { }

    async create(request: FastifyRequest<{ Body: TCreateTicket }>, reply: FastifyReply) {
        try {
            await this.service.create(request.body);
            return reply.code(201).send();
        } catch (error: any) {
            return reply.code(400).send({ error: error.message });
        }
    }

    async findOne(request: FastifyRequest<{ Params: TTicketId }>, reply: FastifyReply) {
        try {
            await this.service.findOne(request.params.id);
            return reply.code(200).send();
        } catch (error: any) {
            return reply.code(400).send({ error: error.message });
        }
    }

    async findAll(_: FastifyRequest, reply: FastifyReply) {
        try {
            await this.service.findAll();
            return reply.code(200).send();
        } catch (error: any) {
            return reply.code(400).send({ error: error.message });
        }
    }

    async update(request: FastifyRequest<{ Params: TTicketId, Body: TUpdateTicket }>, reply: FastifyReply) {
        try {
            const { params, body } = request;
            await this.service.update(params.id, body);
            return reply.code(204).send();
        } catch (error: any) {
            return reply.code(400).send({ error: error.message });
        }
    }
}
