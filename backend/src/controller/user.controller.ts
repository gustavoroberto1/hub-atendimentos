import { FastifyReply, FastifyRequest } from "fastify";
import { userService } from "../service/user.service";

export class UserController {
  constructor(private readonly service = userService) {}

  async register(
    request: FastifyRequest<{ Body: TSignUp }>,
    reply: FastifyReply
  ) {
    try {
      await this.service.register(request.body);
      return reply.code(201).send();
    } catch (error: any) {
      return reply.code(400).send({ error: error.message });
    }
  }

  async login(request: FastifyRequest<{ Body: TSignIn }>, reply: FastifyReply) {
    try {
      const payload = await this.service.login(request.body);
      const token = reply.jwtSign(payload);
      return reply.code(200).send({ access_token: token });
    } catch (error: any) {
      return reply.code(401).send({ erro: error.message });
    }
  }
}
