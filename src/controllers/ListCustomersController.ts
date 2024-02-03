import { FastifyRequest, FastifyReply } from "fastify";
import { ListCustomersService } from "../services/ListCustomersService";
import exp from "constants";

class ListCustomersController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, email, status } = request.query as {
      name: string;
      email: string;
      status: string;
    };
    const listCustomersService = new ListCustomersService();

    const customers = await listCustomersService.execute({
      name,
      email,
      status,
    });

    reply.send(customers);
  }
}

export { ListCustomersController };
