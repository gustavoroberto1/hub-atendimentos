import { FastifyReply, FastifyRequest } from "fastify";
import { clientService } from "../service/client.service";

export class ClientController {
  constructor(private readonly service = clientService) { }

  async create(
    request: FastifyRequest<{ Body: TCreateClient }>,
    reply: FastifyReply
  ) {
    try {
      await this.service.create(request.body)
      return reply.code(201).send();
    } catch (error: any) {
      return reply.code(400).send({ error: error.message });
    }
  }

  async findOne(
    request: FastifyRequest<{ Params: TClientId }>,
    reply: FastifyReply
  ) {
    try {
      await this.service.findOne(request.params.id)
      return reply.code(200).send();
    } catch (error: any) {
      return reply.code(400).send({ error: error.message });
    }
  }

  async findAll(
    _: FastifyRequest,
    reply: FastifyReply
  ) {
    try {
      await this.service.findAll()
      return reply.code(200).send();
    } catch (error: any) {
      return reply.code(400).send({ error: error.message });
    }
  }

  async update(
    request: FastifyRequest<{ Body: TUpdateClient, Params: TClientId }>,
    reply: FastifyReply
  ) {
    const { body, params } = request;
    try {
      await this.service.update(params.id, body);
      return reply.code(204).send(request);
    } catch (error: any) {
      return reply.code(400).send({ error: error.message });
    }
  }

  async delete(
    request: FastifyRequest<{ Params: TClientId }>,
    reply: FastifyReply
  ) {
    try {
      await this.service.delete(request.params.id)
      return reply.code(204).send();
    } catch (error: any) {
      return reply.code(400).send({ error: error.message });
    }
  }
}
