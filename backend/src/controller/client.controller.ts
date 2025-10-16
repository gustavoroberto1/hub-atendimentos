import { FastifyReply, FastifyRequest } from "fastify";
import { clientService } from "../service/client.service";

export class ClientController {
  constructor(private readonly service = clientService) {}

  async register(
    request: FastifyRequest<{ Body: TSignUp }>,
    reply: FastifyReply
  ) {
    try {
      // await this.service.register(request.body);
      return reply.code(201).send();
    } catch (error: any) {
      return reply.code(400).send({ error: error.message });
    }
  }

}
